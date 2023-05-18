import { Component, OnInit } from '@angular/core';
import content from 'src/interfaces/content.interface';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit{

  contents : content[];

  constructor (
    private contentService : ContentService
  ){
    this.contents = [];
  }

  ngOnInit(): void {
    this.contentService.getContent().subscribe(contents=>{
      this.contents = contents;
    })
  }

}
