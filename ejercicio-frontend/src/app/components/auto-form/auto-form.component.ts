import { Component } from '@angular/core';
import { Auto } from '../../auto';
import { AutoService } from '../../services/auto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auto-form',
  templateUrl: './auto-form.component.html',
  styleUrls: ['./auto-form.component.css']
})
export class AutoFormComponent {
  auto: Auto = {
    placa: '',
    tipo: '',
    cilindraje: '',
    color: '',
    modelo: '',
    chasis: '',
    fabricante: '',
    anio: ''
  };

  constructor(private route: ActivatedRoute, 
    private router: Router, private autoService: AutoService) {}

    onSubmit() {
      if (this.camposSonValidos()) {
        this.autoService.addAuto(this.auto)
          .subscribe(response => {
            console.log('Auto registrado con éxito:', response);
            this.gotoIndex();
          }, error => {
            console.error('Error al registrar el auto:', error);
          });
      }
    }
    
    camposSonValidos(): boolean {
      if (!this.auto.placa || !this.auto.tipo || !this.auto.cilindraje || !this.auto.color ||
          !this.auto.modelo || !this.auto.chasis || !this.auto.fabricante || !this.auto.anio) {
        return false;
      }
      return true;
    }

  gotoIndex() {
    this.router.navigate(['/index']);
  }
}