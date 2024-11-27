//only get, put, delete
export interface Clases{
    id:number;
    iddocente:number;
    idalumno:number;
    idasig:number;
    asistencias:number;
}
//only post
export interface Clase{
    iddocente:number;
    idalumno:number;
    idasig:number;
    asistencias:number;
}