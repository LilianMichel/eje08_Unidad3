import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import {Router, NavigationExtras} from '@angular/router';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario';
import { stringify } from 'querystring';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  myForm: FormGroup;
  submitted = false;
  usuarios: Usuario[] = [];


  constructor(private router: Router, private fb: FormBuilder, private service: UsuarioService, public alerta: AlertController) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z0-9_.+-]+@[a-zA-Z0-9.]+[.][a-zA-Z0-9]+')])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.pattern("(^[A-Za-z\d$@$!%*?&1-9']+$)")])]
      });
  }
  registro() {
    this.router.navigate(['/registro']);
  }

 view(usuarios) {
  this.submitted = true;
  if (this.myForm.valid) {
    this.usuarios = this.service.getUsuarios();
    for (let i = 0; i < this.usuarios.length; i++) {
    if (this.usuarios[i].email === this.myForm.get('email').value) {
    if (this.usuarios[i].password === this.myForm.get('password').value) {
      const extras:NavigationExtras = {queryParams: {special: JSON.stringify(this.usuarios[i])}
      };
      this.router.navigate(['/perfil'], extras);
      break;
    }
  }
  else{
    this.datosErroneos();
  } 
  }
    }
    
  }
  async datosErroneos() {
    const alert = await this.alerta.create({
      header: 'Incorrecto',
      message: 'Introduzca sus datos/Datos Incorrectos',
      buttons: ['OK']
    });
    await alert.present();
  }
}


