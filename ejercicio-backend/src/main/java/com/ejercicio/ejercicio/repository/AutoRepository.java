package com.ejercicio.ejercicio.repository;

import com.ejercicio.ejercicio.model.Auto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AutoRepository extends JpaRepository<Auto, Long> {
    Auto findByPlaca(String placa);
}
