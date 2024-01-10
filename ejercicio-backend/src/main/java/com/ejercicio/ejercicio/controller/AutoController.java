package com.ejercicio.ejercicio.controller;

import com.ejercicio.ejercicio.exception.ResourceNotFoundException;
import com.ejercicio.ejercicio.model.Auto;
import com.ejercicio.ejercicio.repository.AutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeParseException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class AutoController {

    @Autowired
    private AutoRepository autoRepository;

    @GetMapping("/autos")
    public List<Auto> listarAutos() {
        return autoRepository.findAll();
    }

    @PostMapping("/autos")
    public Auto guardarAuto(@RequestBody Auto auto) {
        return autoRepository.save(auto);
    }

    @GetMapping("/autos/{placa}")
    public ResponseEntity<Map<String, Object>> listarAutoPorPlaca(@PathVariable String placa,
                                                                  @RequestParam(required = false) String fecha,
                                                                  @RequestParam(required = false) String hora) {
        Auto auto = autoRepository.findByPlaca(placa);

        if (auto == null) {
            throw new ResourceNotFoundException("Auto no encontrado.");
        }

        char ultimoDigito = placa.charAt(placa.length() - 1);
        boolean puedeCircular = puedeCircular(ultimoDigito, fecha, hora);

        System.out.println("circular:"+puedeCircular);
        Map<String, Object> response = new HashMap<>();
        response.put("auto", auto);
        response.put("puedeCircular", puedeCircular);
        response.forEach((key, value) -> System.out.println("Key: " + key + ", Value: " + value.toString()));
        return ResponseEntity.ok(response);
    }

    private boolean puedeCircular(char ultimoDigito, String fecha, String hora) {
        DayOfWeek dayOfWeek = obtenerDiaSemana(fecha);
        LocalTime localTime = LocalTime.parse(hora);

        boolean noCircula = (localTime.isAfter(LocalTime.of(6, 0)) && localTime.isBefore(LocalTime.of(9, 30))) ||
                (localTime.isAfter(LocalTime.of(16, 0)) && localTime.isBefore(LocalTime.of(20, 0)));

        switch (dayOfWeek) {
            case MONDAY:
                return !(noCircula && (ultimoDigito == '1' || ultimoDigito == '2'));
            case TUESDAY:
                return !(noCircula && (ultimoDigito == '3' || ultimoDigito == '4'));
            case WEDNESDAY:
                return !(noCircula && (ultimoDigito == '5' || ultimoDigito == '6'));
            case THURSDAY:
                return !(noCircula && (ultimoDigito == '7' || ultimoDigito == '8'));
            case FRIDAY:
                return !(noCircula && (ultimoDigito == '9' || ultimoDigito == '0'));
            default:
                return true;
        }
    }


    private DayOfWeek obtenerDiaSemana(String fecha) {
        try {
            // Intenta parsear la fecha y obtener el día de la semana
            System.out.println(fecha);
            return LocalDate.parse(fecha).getDayOfWeek();
        } catch (DateTimeParseException e) {
            // Manejar la excepción si la fecha no es válida
            throw new IllegalArgumentException("Formato de fecha no válido: " + fecha);
        }
    }

    private LocalTime obtenerHora(String hora) {
        try {
            System.out.println(hora);
            // Intenta parsear la hora
            return LocalTime.parse(hora);
        } catch (DateTimeParseException e) {
            // Manejar la excepción si la hora no es válida
            throw new IllegalArgumentException("Formato de hora no válido: " + hora);
        }
    }
}