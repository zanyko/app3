//get, put, delete
export interface Users{
    id:number;
    username:string;
    email:string;
    password:string;
    name1:string,
    name2:string,
    name3:string,
    name4:string,
    phone:string,
    isactive: boolean;
    tipo:number;
}
//post
export interface NewUser{
    username:string;
    email:string;
    password:string;
    name1:string,
    name2:string,
    name3:string,
    name4:string,
    phone:string,
    isactive: boolean;
    tipo:number;
}