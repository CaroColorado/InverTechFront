import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-learningheader',
  templateUrl: './learningheader.component.html',
  styleUrls: ['./learningheader.component.css','../../../assets/css/custom-properties.css']
})
export class LearningheaderComponent {
    constructor(public loginService: LoginService){

    }

}
