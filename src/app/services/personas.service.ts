import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(private http: HttpClient) { }

  getPersonasAPI(){
    return this.http.get('https://randomapi.com/api/jntnxc4b?key=MA5K-EOXF-8M99-AE93');
  }

  guardarPersona(datos: any){
    
    let personasGuardadas = localStorage.getItem('datos') ? JSON.parse(localStorage.getItem('datos')) : [];

    personasGuardadas.push(datos);

    localStorage.setItem('datos', JSON.stringify(personasGuardadas));
  }

  getPersonas(){
    return localStorage.getItem('datos') ? JSON.parse(localStorage.getItem('datos')) : [];
  }
}
