import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarios: Usuario[] = new Array();

  constructor() {
    this.usuarios.push({
    firstName: 'Lilian Michel',
    lastName: 'Campos Aguirre', //Apellidos 
    email: 'limicamposag@ittepic.edu.mx',
    photo: 'https://scontent.ftpq1-1.fna.fbcdn.net/v/t1.0-9/p720x720/80550723_2701500953229538_2436278743631659008_o.jpg?_nc_cat=104&_nc_sid=85a577&_nc_eui2=AeFGdlVowIk7-744rpQ8J1ShSQI-5icKWsGv5GY2SS3d-v-4Igt6nOCJsqF8QF6lGpVQJUTI2DqiKcjgkACAPwu7W0T-9D7Lo_DKsJ-_m6bnlQ&_nc_ohc=rMfYHOC5A54AX8F_Ll6&_nc_ht=scontent.ftpq1-1.fna&_nc_tp=6&oh=71cc9bd5eaf26f6c081d41b68eacbf7b&oe=5EA691AD', // URL de foto del usuario
    password: 'MichelCampos14',
    birthday: new Date('1997/10/14'), //Fecha de nacimiento
    gender: 'F',  //Género
    rfc: 'LMCA141097', //Registro Federal de Contribuyente (RFC)
    interest: {artista: 'Mana', album: 'Sueños liquidos', canciones: 'En el muelle de San Blas'}
    });
    this.usuarios.push({
      firstName: 'Liliana',
      lastName: 'Aguirre Briseño', //Apellidos 
      email: 'liagbrg@ittepic.edu.mx',
      photo: 'https://scontent.ftpq1-1.fna.fbcdn.net/v/t1.0-9/p720x720/80550723_2701500953229538_2436278743631659008_o.jpg?_nc_cat=104&_nc_sid=85a577&_nc_eui2=AeFGdlVowIk7-744rpQ8J1ShSQI-5icKWsGv5GY2SS3d-v-4Igt6nOCJsqF8QF6lGpVQJUTI2DqiKcjgkACAPwu7W0T-9D7Lo_DKsJ-_m6bnlQ&_nc_ohc=rMfYHOC5A54AX8F_Ll6&_nc_ht=scontent.ftpq1-1.fna&_nc_tp=6&oh=71cc9bd5eaf26f6c081d41b68eacbf7b&oe=5EA691AD', // URL de foto del usuario
      password: 'LilianaAguirre15',
      birthday: new Date('1997/10/14'), //Fecha de nacimiento
      gender: 'F',  //Género
      rfc: 'LMCA141097', //Registro Federal de Contribuyente (RFC)
      interest: {artista: 'Reily', album: 'Bien acompañado', canciones:'Desde que llegaste'}
      });

  }
   newUsuario(usuario: Usuario): void {
    this.usuarios.push(usuario);
  }
  getUsuarios(): Usuario[] {
    return this.usuarios;
  }
  getUsuario(pos:number){
    return this.usuarios[pos]
  }


}
