import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PersonasService } from '../services/personas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor(private service: PersonasService){}

  personas: any;
  nombrePersona: string;
  nombreDocumento: string = "";
  
  ngOnInit(): void {
      this.service.getPersonasAPI().subscribe( (resp: any) => {
        this.personas = resp.results[0];
      });
  }

  onSubmit(formulario: NgForm){
    console.log(formulario);
    if(formulario.invalid){
      formulario.form.controls.nombre.markAsTouched();
      return;
    }

    let datos = {
      "nombre": this.nombrePersona,
      "documento": this.nombreDocumento,
    };
    this.service.guardarPersona(datos);
    
    formulario.reset();
    this.nombreDocumento = "";
  }

  onChange(fileInput){
    this.nombreDocumento = fileInput.target.files[0].name;
  }

}
