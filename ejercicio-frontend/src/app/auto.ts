export class Auto {
    placa: string;
    tipo: string;
    cilindraje: string;
    color: string;
    modelo: string;
    chasis: string;
    fabricante: string;
    anio: string;
  
    constructor(
      placa: string,
      tipo: string,
      cilindraje: string,
      color: string,
      modelo: string,
      chasis: string,
      fabricante: string,
      anio: string
    ) {
      this.placa = placa;
      this.tipo = tipo;
      this.cilindraje = cilindraje;
      this.color = color;
      this.modelo = modelo;
      this.chasis = chasis;
      this.fabricante = fabricante;
      this.anio = anio;
    }
  }
  