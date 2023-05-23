import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { userLoggedRequestI } from 'src/models/UserLoggedRequest.interface';
import { userLoggedResponseI } from 'src/models/UserLoggedResponse.interface';

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
        this.api.currentUser.firstTime = data.firstTime;
        this.isPremium = data.premium;
        this.name = data.firstname + "";
        console.log("role: " + this.role);
        this.isFirstTime(this.api.currentUser);
      });
      
    }

    isFirstTime(user: userLoggedResponseI){
      if(user.firstTime){
        this.api.setFirstTimeFalse(this.userLoggedRequest).subscribe(data => {
          console.log("firstTime: " + data.firstTime);
        });
      }else{
        //tambien puede ser llamdo el profiling desde aqui para tener que evitar llamar /isFirstTime desde el login
      }
    }

    public salir(){
      //localStorage.setItem('isLoggedIn', 'false');
      this.api.isLoggedIn = false;
      this.api.currentUser = {
        firstname : '',
        email : '',
        role : '',
        premium: false,
        firstTime: false
      }
      console.log("Current user: " + this.api.currentUser.firstname + ", " + this.api.currentUser.email + ", " + this.api.currentUser.role);
      this.router.navigate(['/login']);
    }

    
}
