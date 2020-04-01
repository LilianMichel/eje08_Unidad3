export class Usuario {
    firstName: string; //Nombre(s)
    lastName: string; //Apellidos 
    email: string;
    photo: string; // URL de foto del usuario
    password: string;
    birthday: Date; //Fecha de nacimiento
    gender: string;  //Género
    rfc: string; //Registro Federal de Contribuyente (RFC)
    interest: {  //arreglo con intereses
        artista: string,  //Interes (Ejemplo: 'Desarrollo Web')
        album: string,
        canciones: string;
    };
}
