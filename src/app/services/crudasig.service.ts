import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Asignaturas, Asignatura } from 'src/interfaces/asignaturas';

@Injectable({
  providedIn: 'root'
})
export class CrudasigService {

  constructor(private httpclient: HttpClient) { }

  GetAllAsignaturas():Observable<Asignaturas[]>{
    return this.httpclient.get<Asignaturas[]>(`${environment.apiUrl}/asignaturas`);
  }

  GetById(id:any):Observable<Asignaturas>{
    return this.httpclient.get<Asignaturas>(`${environment.apiUrl}/asignaturas/?id=${id}`);
  }
  GetByIdUser(iduser:any):Observable<Asignaturas>{
    return this.httpclient.get<Asignaturas>(`${environment.apiUrl}/asignaturas/?iduser=${iduser}`);
  }
  GetByIdAsig(idasig:any):Observable<Asignaturas>{
    return this.httpclient.get<Asignaturas>(`${environment.apiUrl}/asignaturas/?idasig=${idasig}`);
  }

  getNameByIdAsig(idasig: number): Observable<string> {
    return this.httpclient.get<Asignaturas[]>(`${environment.apiUrl}/asignaturas/?id=${idasig}`).pipe(
      map(asig => {
        if (asig && asig.length > 0) {
          return `${asig[0].nombre}`;
        } 
        else {
          return 'Subject not found';
        }
      }),
      catchError(error => {
        return ['Error at getting data'];
      })
    );
  }

  UpdateClase(id: number, updatedAsig:any): Observable<Asignaturas> {
    return this.httpclient.put<Asignaturas>(`${environment.apiUrl}/asignaturas/${id}`, updatedAsig);
  }
  
  PostClase(newAsig:Asignatura): Observable<Asignatura>{
    return this.httpclient.post<Asignaturas>(`${environment.apiUrl}asignaturas`, newAsig);
  }
  DeleteClase(id:number): Observable<Asignaturas>{
    return this.httpclient.delete<Asignaturas>(`${environment.apiUrl}/asignaturas/?id=${id}`);
  }
}
