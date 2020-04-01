import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from '../../models/usuario';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  
  myForm: FormGroup;
  submitted = false;

  constructor(private router: Router, private fb: FormBuilder, private service: UsuarioService) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      firstName: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-z]+[ ]*[a-zA-Z]*[ ]*[a-zA-Z]*')])],
      lastName: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-z]+[ ]*[a-zA-Z]*[ ]*[a-zA-Z]*')])],
      gender: ['', Validators.compose([Validators.required])],
      rfc: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z][a-zA-Z][a-zA-Z][0-9]+')])],
      birthday: ['', Validators.compose([Validators.required])],
      photo: ['', Validators.compose([Validators.required, Validators.pattern('https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}')])],
      email: ['', Validators.compose([Validators.required,Validators.minLength(10), Validators.pattern('[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+.[a-zA-Z0-9.-]+')])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.pattern("(^[A-Za-z\d$@$!%*?&0-9']+$)")])],
      interest: ['', Validators.compose([Validators.required])],
      artista: ['', Validators.compose([Validators.required])],
      album: ['', Validators.compose([Validators.required])],
      canciones: ['', Validators.compose([Validators.required])]
      });
  }

 guardar() {
  this.submitted = true;
  if (this.myForm.valid) {
    this.service.newUsuario({
      firstName: this.myForm.get('firstName').value,
      lastName: this.myForm.get('lastName').value,
      rfc: this.myForm.get('rfc').value,
      email:this.myForm.get('email').value,
      gender:this.getGender(),
      birthday:this.myForm.get('birthday').value,
      password:this.myForm.get('password').value,
      interest:{artista:this.myForm.get('artista').value,
      album:this.myForm.get('album').value,
      canciones:this.myForm.get('canciones').value},
      photo:this.myForm.get('photo').value
    });
  }
 }
 

 getGender() {
  if (this.myForm.get('gender').value === 'femenino') {
    return 'femenino';
  } else {
    return 'masculino';
  }
}

inicio(){
  this.router.navigate(['/home']);
}

}
