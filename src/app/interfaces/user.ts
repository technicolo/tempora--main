export interface RegisterData extends User {
    contrasenia: string,
}

export interface User{
    nombreDeUsuario: string,
    nombre: string,
    apellido: string,
}

export interface LoginData {
    nombreDeUsuario: string,
    contrasenia: string
}