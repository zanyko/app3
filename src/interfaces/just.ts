//only get, put, delete
export interface Justificaciones{
    id:number;
    iduser:number;
    idclass:number;
    just:number;
    name:string;
    date:Date;
    motivo:string;
}
//only post
export interface Justificacion{
    iduser:number;
    idclass:number;
    just:number;
    name:string;
    date:Date;
    motivo:string;
}