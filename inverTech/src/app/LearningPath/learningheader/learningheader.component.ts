import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { userLoggedRequestI } from 'src/models/UserLoggedRequest.interface';

@Component({
  selector: 'app-learningheader',
  templateUrl: './learningheader.component.html',
  styleUrls: ['./learningheader.component.css','../../../assets/css/custom-properties.css']
})
export class LearningheaderComponent {
    role: string = '';
    name: string = '';
    userLoggedRequest: userLoggedRequestI = {
      email : ''
    }
    isPremium: boolean = false;
    constructor(public loginService: LoginService, private router: Router, private api: ApiService){
      this.userLoggedRequest.email = localStorage.getItem('email');
      this.api.loggedUser(this.userLoggedRequest).subscribe(data =>{
        this.role = data.role+"";
        this.api.currentUser.email = data.email;
        this.api.currentUser.firstname = data.firstname;
        this.api.currentUser.role = data.role;
        this.isPremium = data.premium;
        this.name = data.firstname + "";
        console.log("role...." + this.role);
      });
      
    }

    public salir(){
      //localStorage.setItem('isLoggedIn', 'false');
      this.api.isLoggedIn = false;
      this.api.currentUser = {
        firstname : '',
        email : '',
        role : '',
        premium: false
      }
      console.log("Current user2: " + this.api.currentUser.firstname + ", " + this.api.currentUser.email + ", " + this.api.currentUser.role);
      this.router.navigate(['/login']);
    }

    
}
