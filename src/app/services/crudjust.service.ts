import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Justificaciones, Justificacion } from 'src/interfaces/just';

@Injectable({
  providedIn: 'root'
})
export class CrudjustService {

  constructor(private httpclient: HttpClient) { }

  getAlljustificaciones():Observable<Justificaciones[]>{
    return this.httpclient.get<Justificaciones[]>(`${environment.apiUrl}/justificaciones`);
  }

  getById(id:any):Observable<Justificaciones>{
    return this.httpclient.get<Justificaciones>(`${environment.apiUrl}/justificaciones/?id=${id}`);
  }
  
  getByIdUser(iduser:any):Observable<Justificaciones[]>{
    return this.httpclient.get<Justificaciones[]>(`${environment.apiUrl}/justificaciones/?iduser=${iduser}`);
  }

  getByIdClass(idclass:any):Observable<Justificaciones>{
    return this.httpclient.get<Justificaciones>(`${environment.apiUrl}/justificaciones/?idclass=${idclass}`);
  }

  updateJust(id: number, updatedJust:any): Observable<Justificaciones> {
    return this.httpclient.put<Justificaciones>(`${environment.apiUrl}/justificaciones/${id}`, updatedJust);
  }
  
  postJust(newJust:Justificacion): Observable<Justificacion>{
    return this.httpclient.post<Justificacion>(`${environment.apiUrl}/justificaciones`, newJust);
  }

  deleteClase(id:number): Observable<Justificaciones>{
    return this.httpclient.delete<Justificaciones>(`${environment.apiUrl}/justificaciones/?id=${id}`);
  }
}