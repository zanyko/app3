import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, catchError } from 'rxjs';
import { Users, NewUser } from 'src/interfaces/users';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpclient: HttpClient
  ){}

  GetAllUsers():Observable<Users[]>{
    return this.httpclient.get<Users[]>(`${environment.apiUrl}/usuarios`);
  }

  GetUserByUsername(usuario:any):Observable<Users>{
    return this.httpclient.get<Users>(`${environment.apiUrl}/usuarios/?username=${usuario}`);
  }

  getNameById(idd: number): Observable<string> {
    return this.httpclient.get<Users[]>(`${environment.apiUrl}/usuarios/?id=${idd}`).pipe(
      map(users => {
        if (users && users.length > 0) {
          return `${users[0].name1} ${users[0].name2} ${users[0].name3} ${users[0].name4}`;
        } 
        else {
          return 'Usuario no encontrado';
        }
      }),
      catchError(error => {
        return ['Error al obtener los datos'];
      })
    );
  }
  getMailById(idd: number): Observable<string> {
    return this.httpclient.get<Users[]>(`${environment.apiUrl}/usuarios/?id=${idd}`).pipe(
      map(users => {
        if (users && users.length > 0) {
          return `${users[0].email}`;
        } 
        else {
          return 'Usuario no encontrado';
        }
      }),
      catchError(error => {
        return ['Error al obtener los datos'];
      })
    );
  }

  getIdByUsername(usuario: any): Observable<number> {
    return this.httpclient.get<Users[]>(`${environment.apiUrl}/usuarios/?username=${usuario}`).pipe(
      map(users => {
        if (users.length > 0) {
          return users[0].id; // Retorna el id del primer usuario
        } 
        else {
          throw new Error('Usuario no encontrado');
        }
      })
    );
  }

  getId() {
    return sessionStorage.getItem('userId');
  }

  UpdateUser(id: number, updatedUser:any): Observable<Users> {
    return this.httpclient.put<Users>(`${environment.apiUrl}/usuarios/${id}`, updatedUser);
  }

  GetUsuarioId(id:number):Observable<Users>{
    return this.httpclient.get<Users>(`${environment.apiUrl}/usuarios/${id}`);
  }
  
  PostUsuario(newUsuario:NewUser): Observable<NewUser>{
    return this.httpclient.post<Users>(`${environment.apiUrl}/usuarios`, newUsuario);
  }

  isLoggedIn(){
    return sessionStorage.getItem('username')!=null;
  }

}
