import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../services/personas.service';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
})
export class StorageComponent implements OnInit {

  constructor(private service: PersonasService) { }

  personas: any = [];

  ngOnInit() {
    this.personas = this.service.getPersonas();
    console.log(this.personas);
  }

}
