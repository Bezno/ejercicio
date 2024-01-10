import { Component, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AutoComponent } from '../auto/auto.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
export class IndexComponent {
  search: string = '';
  isSearchEmpty: boolean = false;
  notFound: boolean = false;
  fecha: Date;
  fechaAnt: boolean = false;

  constructor(private dialog: MatDialog, private router: Router) {
    this.fecha = new Date();
  }

  buscar() {
    if (!this.search.trim()) {
      this.isSearchEmpty = true;
    } else {
      const dateFromString = new Date(this.fecha);
      const formattedDate = this.getFormattedDate(dateFromString);
      const formattedTime = this.getFormattedTime(dateFromString);

      const data = {
        placa: this.search,
        fecha: formattedDate,
        hora: formattedTime,
      };

      this.dialog.open(AutoComponent, { data });
    }
  }

  private getFormattedDate(date: Date): string {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // Agrega un cero al frente si el mes tiene un solo dígito
    const day = ('0' + date.getDate()).slice(-2); // Agrega un cero al frente si el día tiene un solo dígito
    return `${year}-${month}-${day}`;
  }

  private getFormattedTime(date: Date): string {
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    return `${hours}:${minutes}`;
  }

  validarFechaActual() {
    const fechaIngresada = new Date(this.fecha);

    const fechaActual = new Date();
    fechaIngresada.setMinutes(0, 0, 0);
    fechaActual.setMinutes(0, 0, 0);

    if (fechaIngresada < fechaActual) {
      console.log(
        'La fecha ingresada es anterior a la fecha actual. No se puede avanzar.'
      );
      this.dialog.open(FechaAnterior);
      this.fechaAnt = true;
    } else {
      this.buscar();
    }
  }
}

@Component({
  selector: 'app-fecha',
  template: `<div class="container">
    <div class="card">
      <div class="card-body">
        Fecha anterior a la actual. Ingrese una fecha posterior
      </div>
    </div>
  </div>`,
  styles: `.container {
    margin: 20px;
  }
  
  .card {
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .card-body {
    padding: 20px;
  }`,
})
export class FechaAnterior {}
