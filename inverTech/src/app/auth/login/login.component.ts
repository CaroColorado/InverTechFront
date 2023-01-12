import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router){

  }
  
  correo: any = "";
  contraseña: string = "";

  goToLearning() {
    this.correo = document.getElementById("email");
    //this.correo = document.getElementById("email");
    console.log(this.correo)
  }
}
