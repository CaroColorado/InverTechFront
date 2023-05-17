import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import content from 'src/interfaces/content.interface';

@Component({
  selector: 'app-new-content',
  templateUrl: './new-content.component.html',
  styleUrls: ['./new-content.component.css']
})
export class NewContentComponent implements OnInit{
  model: content = {
    id: '',
    nombre: '',
    contenido: ''
  };

  constructor(){
    
  }
  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(this.model); // Aquí puedes hacer lo que desees con los datos del formulario
    }
  }
}
