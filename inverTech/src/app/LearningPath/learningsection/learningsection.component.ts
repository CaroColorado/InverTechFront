import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { ContentService } from 'src/app/services/content.service';
import content from 'src/interfaces/content.interface';

@Component({
  selector: 'app-learningsection',
  templateUrl: './learningsection.component.html',
  styleUrls: ['./learningsection.component.css']
})
export class LearningsectionComponent implements OnInit {
  contents : content[];

  constructor(private contentService : ContentService) { 
    this.contents = [];
  }
  ngOnInit() {
  }
  ngAfterViewInit(){
    this.contentService.getContent().subscribe(contents=>{
      this.contents = contents;
    })
  }

}
