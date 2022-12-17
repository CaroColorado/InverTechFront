import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inverTech';
  
  constructor(private router: Router){}

  goTomultiple(){
    this.router.navigate(['/', 'message']);
  }
}
