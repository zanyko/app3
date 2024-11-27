import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Asistencias, Asistencia } from 'src/interfaces/asistencias';

@Injectable({
  providedIn: 'root'
})
export class CrudasisService {

  constructor(private httpclient: HttpClient) { }

  GetAllAsistencias():Observable<Asistencias[]>{
    return this.httpclient.get<Asistencias[]>(`${environment.apiUrl}/asistencias`);
  }

  GetById(id:any):Observable<Asistencias>{
    return this.httpclient.get<Asistencias>(`${environment.apiUrl}/asistencias/?id=${id}`);
  }
  
  GetByIdUser(iduser:any):Observable<Asistencias>{
    return this.httpclient.get<Asistencias>(`${environment.apiUrl}/asistencias/?iduser=${iduser}`);
  }

  GetByIdClass(idclass:any):Observable<Asistencias>{
    return this.httpclient.get<Asistencias>(`${environment.apiUrl}/asistencias/?idclass=${idclass}`);
  }

  UpdateAsis(id: number, updatedAsis:any): Observable<Asistencias> {
    return this.httpclient.put<Asistencias>(`${environment.apiUrl}/asistencias/${id}`, updatedAsis);
  }
  
  PostAsis(newAsis:Asistencia): Observable<Asistencia>{
    return this.httpclient.post<Asistencia>(`${environment.apiUrl}/asistencias`, newAsis);
  }

  DeleteClase(id:number): Observable<Asistencias>{
    return this.httpclient.delete<Asistencias>(`${environment.apiUrl}/asistencias/?id=${id}`);
  }
}