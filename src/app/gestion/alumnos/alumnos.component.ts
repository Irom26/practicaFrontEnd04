import { Component, Injectable } from '@angular/core';
import { Alumno } from './alumno';
import { ServicioAlumnosService } from './servicio-alumnos.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css'],
  
})

export class AlumnosComponent {
  title = 'Alumno ';
  //modelo = new Alumno("a01","Maria","Perez","29/10/1990","Los pinos 100","mPerez@gmail.com","999 999 999");
  constructor(private miServicio:ServicioAlumnosService){}
  alumnos:Alumno[]=[
    new Alumno("a01","Maria","Perez","29/10/1990","Los pinos 100","mPerez@gmail.com","999 999 999"),
    new Alumno("a02","Juan","Perez","29/10/1990","Los pinos 100","mPerez@gmail.com","999 999 999"),
    new Alumno("a03","Pedro","Perez","29/10/1990","Los pinos 100","mPerez@gmail.com","999 999 999"),
    new Alumno("a04","Oscar","Perez","29/10/1990","Los pinos 100","mPerez@gmail.com","999 999 999"),

  ];
  agregarAlumno(){
    let miAlumno= new Alumno(this.cuadroId, this.cuadroNombres,this.cuadroApellidos,this.cuadroFechaNacimiento,this.cuadroDireccion,this.cuadroCorreo,this.cuadroTelefono);
    this.miServicio.muestraMensaje("Nombre del Alumno: "+miAlumno.nombres);
    this.alumnos.push(miAlumno);

  }
cuadroId:string="";
cuadroNombres:string="";
cuadroApellidos:string="";
cuadroFechaNacimiento:string="";
cuadroDireccion:string="";
cuadroCorreo:string="";
cuadroTelefono:string="";
enviado = false;

  //onSubmit(){
   // console.log(this.modelo);
    //this.enviado = true;

//  }
  
}
