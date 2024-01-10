package com.ejercicio.ejercicio.model;

import jakarta.persistence.*;

@Entity
@Table(name = "autos")
public class Auto {

    @Id
    @Column(name = "placa", length = 7 ,nullable = false)
    private String placa;

    @Column(name = "tipo" , length = 20 ,nullable = false)
    private String tipo;

    @Column(name = "cilindraje", length = 4 ,nullable = false)
    private String cilindraje;

    @Column(name = "color" , length = 10 ,nullable = false)
    private String color;

    @Column(name = "modelo" , length = 20 ,nullable = false)
    private String modelo;

    @Column(name = "chasis", length = 6 ,nullable = false)
    private String chasis;

    @Column(name = "fabricante", length = 10 ,nullable = false)
    private String fabricante;

    @Column(name = "anio", length = 4 ,nullable = false)
    private String anio;

    public Auto() {

    }

    public Auto(String placa, String tipo, String cilindraje, String color, String modelo, String chasis, String fabricante, String anio) {
        super();
        this.placa = placa;
        this.tipo = tipo;
        this.cilindraje = cilindraje;
        this.color = color;
        this.modelo = modelo;
        this.chasis = chasis;
        this.fabricante = fabricante;
        this.anio = anio;
    }

    public String getPlaca() {
        return placa;
    }

    public void setPlaca(String placa) {
        this.placa = placa;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getCilindraje() {
        return cilindraje;
    }

    public void setCilindraje(String cilindraje) {
        this.cilindraje = cilindraje;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public String getChasis() {
        return chasis;
    }

    public void setChasis(String chasis) {
        this.chasis = chasis;
    }

    public String getFabricante() {
        return fabricante;
    }

    public void setFabricante(String fabricante) {
        this.fabricante = fabricante;
    }

    public String getAnio() {
        return anio;
    }

    public void setAnio(String anio) {
        this.anio = anio;
    }

    @Override
    public String toString() {
        return "Auto{" +
                "placa='" + placa + '\'' +
                ", tipo='" + tipo + '\'' +
                ", cilindraje='" + cilindraje + '\'' +
                ", color='" + color + '\'' +
                ", modelo='" + modelo + '\'' +
                ", chasis='" + chasis + '\'' +
                ", fabricante='" + fabricante + '\'' +
                ", anio='" + anio + '\'' +
                '}';
    }
}