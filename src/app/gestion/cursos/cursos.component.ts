import { Component } from '@angular/core';
import { Curso } from './curso';
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  horas =["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24"];
  creditos =["01","02","03","04","05"];
  categorias =["softwarte","gestion","otros"];


  modelo = new Curso("c01","java",this.horas[0],this.creditos[0],this.categorias[0]);

  enviado = false;

  onSubmit(){
    console.log(this.modelo);
    this.enviado = true;

  }
  
}
