import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Clases, Clase } from 'src/interfaces/clases';

@Injectable({
  providedIn: 'root'
})
export class CrudclassService {

  constructor(private httpclient: HttpClient) { }

  GetAllClases():Observable<Clases[]>{
    return this.httpclient.get<Clases[]>(`${environment.apiUrl}/clases`);
  }

  GetById(id:number):Observable<Clases>{
    return this.httpclient.get<Clases>(`${environment.apiUrl}/clases/?id=${id}`);
  }
  GetById2(id: number): Observable<Clases> {
    return this.httpclient.get<Clases[]>(`${environment.apiUrl}/clases/?id=${id}`)
        .pipe(
            map(clases => clases[0])
        );
}

  getClasesByAlumn(idalumn:any):Observable<Clases[]> {
    return this.httpclient.get<Clases[]>(`${environment.apiUrl}/clases/?idalumno=${idalumn}`);
  }
  getClasesByDocente(idd:number):Observable<Clases[]> {
    return this.httpclient.get<Clases[]>(`${environment.apiUrl}/clases/?iddocente=${idd}`);
  }
  getIdAsigById(idClass:number):Observable<number> {
    return this.httpclient.get<Clases>(`${environment.apiUrl}/clases/?id=${idClass}`).pipe(
      map(clase => clase.idasig) 
    );
  }

  UpdateClase(id: number, updatedClass:any): Observable<Clases> {
    return this.httpclient.put<Clases>(`${environment.apiUrl}/clases/${id}`, updatedClass);
  }
  
  PostClase(newClass:Clase): Observable<Clase>{
    return this.httpclient.post<Clase>(`${environment.apiUrl}/clases`, newClass);
  }
  DeleteClase(id:number): Observable<Clases>{
    return this.httpclient.delete<Clases>(`${environment.apiUrl}/clases/?id=${id}`);
  }
}