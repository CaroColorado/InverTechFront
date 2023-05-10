import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  error:string = ""
  profileForm = this.fb.group({
    name: [''],
    email: [''],
    password: ['']
  });
  constructor(private router: Router, private fb: FormBuilder, private loginService: LoginService){

  }

  goToProfiling() {
    //validar usuario
    const isUserValid = this.loginService.validateUser(this.profileForm);
    if(isUserValid){
      //redireccionar a learning
      this.error = "El usuario ya esta registrado";
      console.log(":)");
    }else{
      this.error = "";
      this.router.navigate(['/profiling']);
    }
    //this.correo = document.getElementById("email");
    console.log(this.profileForm);
  }
}
