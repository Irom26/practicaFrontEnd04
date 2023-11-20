import { Component, Input, OnInit } from '@angular/core';
import { Alumno } from '../gestion/alumnos/alumno';

@Component({
  selector: 'app-alumno-hijo',
  templateUrl: './alumno-hijo.component.html',
  styleUrls: ['./alumno-hijo.component.css']
})
export class AlumnoHijoComponent implements OnInit{
@Input() alumnoLista:Alumno;
@Input() indice:number;
constructor(){

}
ngOnInit():void{}
}
