import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  error:string = ""
  profileForm = this.fb.group({
    nombre: [''],
    email: [''],
    password: ['']
  });

  constructor(private router: Router, private fb: FormBuilder, private loginService: LoginService){

  }

  goToLearning() {
    //validar usuario
    const isUserValid = this.loginService.validateUser(this.profileForm);
    if(isUserValid){
      //redireccionar a learning
      this.router.navigate(['/learning']);
      this.error = "";
      console.log(":)");
    }else{
      //mostrar mensaje error
      this.error = "El usuario no esta registrado"
      //borrar formulario
      console.log(":(");
      
    }
    //this.correo = document.getElementById("email");
    console.log(this.profileForm.get('email')?.value);
  }

}
