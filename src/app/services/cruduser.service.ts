import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TipoUsuario } from 'src/interfaces/tipoUsuario';

@Injectable({
  providedIn: 'root'
})
export class CruduserService {

  constructor(private httpclient: HttpClient) { }

  getById(id: number): Observable<string> {
    return this.httpclient.get<{ nombre: string }[]>(`${environment.apiUrl}/tipoUsuarios/?id=${id}`)
    .pipe(map(response => response[0]?.nombre)
    );
  }

}
