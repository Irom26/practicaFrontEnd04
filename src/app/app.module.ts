import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnosComponent } from './gestion/alumnos/alumnos.component';
import { CursosComponent } from './gestion/cursos/cursos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServicioAlumnosService } from './gestion/alumnos/servicio-alumnos.service'
import { AlumnoHijoComponent } from './alumno-hijo/alumno-hijo.component';



@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    AlumnosComponent,
    AlumnoHijoComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
   
  ],
  providers: [ServicioAlumnosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
