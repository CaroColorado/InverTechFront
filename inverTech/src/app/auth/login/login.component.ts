import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import {AuthenticateI} from '../../../models/authenticate.interface';
import {ApiService} from '../../services/api.service'
import { ReponseI } from 'src/models/reponse.interface';
import { MatDialog } from '@angular/material/dialog';
import { ErrorLoginModalComponent } from 'src/app/modal/errorlogin-modal.component';
import { userLoggedRequestI } from 'src/models/UserLoggedRequest.interface';


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

  formAuth: AuthenticateI = {
    email: '',
    password: ''
  }

  response: ReponseI = {
    access_token: '',
    refresh_token: '',
    message: ''
  }

  userLoggedRequest: userLoggedRequestI = {
    email : ''
  }

  constructor(private router: Router, private fb: FormBuilder, private loginService: LoginService, private api: ApiService, public dialog: MatDialog){

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

  onAuth(){
    this.formAuth.email = this.profileForm.controls.email.value;
    this.formAuth.password = this.profileForm.controls.password.value;
    this.api.authenticate(this.formAuth).subscribe(data =>{
      this.response = data;
      console.log("data: " + data.message)
      if(data.message?.includes("Error")){
        this.api.isLoggedIn = false;
        //localStorage.setItem('isLoggedIn', 'false');
        this.dialog.open(ErrorLoginModalComponent);
      }else{
        console.log("logueado");
        localStorage.setItem('access_token', this.response.access_token+"");
        localStorage.setItem('refresh_token', this.response.refresh_token+"");
        //localStorage.setItem('isLoggedIn', 'true');
        this.api.isLoggedIn = true;
        this.userLoggedRequest.email = this.formAuth.email;
        localStorage.setItem('email', this.formAuth.email+"");
        this.router.navigate(['/learning']); 
      }
    });
  }

}
