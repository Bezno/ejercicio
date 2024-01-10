import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auto } from '../auto';

@Injectable({
  providedIn: 'root'
})
export class AutoService {

  private autosUrl: string;

  constructor(private http: HttpClient) {
    this.autosUrl = 'http://localhost:8080/api/v1';
  }

  public getAutos(): Observable<Auto[]> {
    return this.http.get<Auto[]>(this.autosUrl+'/autos');
  }

  public addAuto(auto: Auto): Observable<Auto> {
    return this.http.post<Auto>(this.autosUrl+'/autos', auto);
  }

  public getAutoByPlaca(placa: string, fecha?: string, hora?: string): Observable<Map<string, Object>> {
    let params = new HttpParams().set('placa', placa);

    if (fecha) {
      params = params.set('fecha', fecha);
    }

    if (hora) {
      params = params.set('hora', hora);
    }
    

    return this.http.get<Map<string, Object>>(this.autosUrl + '/autos/' + placa, { params });
  }
}
