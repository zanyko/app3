//only get, put, delete
export interface Asistencias{
    id:number;
    iduser:number;
    idclass:number;
    asis:number;
    qrdata:string;
}
//only post
export interface Asistencia{
    iduser:number;
    idclass:number;
    asis:number;
    qrdata:string;
}