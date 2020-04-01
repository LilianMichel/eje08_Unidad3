import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from '../../models/usuario';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  myForm: FormGroup;
  usuario: any;


  constructor( private actroute: ActivatedRoute, private router: Router) {
    this.actroute.queryParams.subscribe(
    params => {
      this.usuario = JSON.parse(params.special);
    }
    );
  }
  ngOnInit() {
  }


  galeria() {
    this.router.navigate(['/galeria']);
  }

}
