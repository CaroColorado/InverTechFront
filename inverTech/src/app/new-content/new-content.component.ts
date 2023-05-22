import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import content from 'src/interfaces/content.interface';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-new-content',
  templateUrl: './new-content.component.html',
  styleUrls: ['./new-content.component.css']
})
export class NewContentComponent implements OnInit{
  model: content = {
    id: '',
    nombre: '',
    contenido: '',
    isPremium: false
  };

  constructor(
    private contentService: ContentService
  ){
  }

  ngOnInit(): void {
  }

  async onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(this.model);
      const response = await this.contentService.addContent(this.model);
      console.log(response);
    }
  }
}
