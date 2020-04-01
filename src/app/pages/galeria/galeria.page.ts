import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from '../../models/usuario';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
})
export class GaleriaPage implements OnInit {
  myForm: FormGroup;
  usuario: any;

  slides = [
  {
    img: 'assets/registro/1.jpg',
    titulos: 'Fotografia 1<br>Primer fotografia de perfil'
  },
  {
    img: 'assets/registro/3.jpg',
    titulos: 'Fotografia 2<br>Primer fotografia de perfil'
  },
  {
    img: 'assets/registro/5.jpg',
    titulos: 'Fotografia 3<br>Primer fotografia de perfil'
  }
]


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