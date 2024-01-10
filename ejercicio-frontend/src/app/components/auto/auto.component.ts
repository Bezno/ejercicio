import { Component, Inject, OnInit } from '@angular/core';
import { AutoService } from '../../services/auto.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrl: './auto.component.css',
})
export class AutoComponent implements OnInit {
  datos: any;
  puedeCircular: boolean = false;
  notFound: boolean = false;
  constructor(
    private autoService: AutoService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    const { placa, fecha, hora } = this.data;

    this.autoService
      .getAutoByPlaca(placa, fecha, hora)
      .pipe(
        catchError((error) => {
          
          if (error.status === 404) {
            this.notFound = true;
          } else {
            console.error('Error en la solicitud:', error);
            // Puedes manejar otros tipos de errores aquí.
          }
          return throwError(error); // Reenvía el error para que otros también lo manejen
        })
      )
      .subscribe((response) => {
        this.datos= response;
        this.puedeCircular = this.datos.puedeCircular;
        console.log(this.data)
        console.log(this.puedeCircular)
      });
      
  }
}
