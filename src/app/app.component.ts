import { Component } from '@angular/core';
import { Alumno } from './gestion/alumnos/alumno';
import { ServicioAlumnosService } from './gestion/alumnos/servicio-alumnos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mantenimiento ';
   constructor(private miServicio:ServicioAlumnosService){}
  alumnos:Alumno[]=[
    new Alumno("a01","Maria","Perez","29/10/1990","Los pinos 100","mPerez@gmail.com","999 999 999"),
    new Alumno("a02","Juan","Perez","29/10/1990","Los pinos 100","mPerez@gmail.com","999 999 999"),
    new Alumno("a03","Pedro","Perez","29/10/1990","Los pinos 100","mPerez@gmail.com","999 999 999"),
    new Alumno("a04","Oscar","Perez","29/10/1990","Los pinos 100","mPerez@gmail.com","999 999 999"),

  ];
  agregarAlumno(){
    let miAlumno= new Alumno(this.cuadroId, this.cuadroNombres,this.cuadroApellidos,this.cuadroFechaNacimiento,this.cuadroCorreo,this.cuadroTelefono);
    this.miServicio.muestraMensaje("Nombre del Alumno"+miAlumno.nombres);
    this.alumnos.push(miAlumno);

  }
cuadroId:string="";
cuadroNombres:string="";
cuadroApellidos:string="";
cuadroFechaNacimiento:string="";
cuadroCorreo:string="";
cuadroTelefono:string="";

}
