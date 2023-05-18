import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import {ApiService} from '../../services/api.service'
import {RegisterI} from '../../../models/register.interface';
import {AuthenticateI} from '../../../models/authenticate.interface';
import {ReponseI} from '../../../models/reponse.interface';
import {MatDialog} from '@angular/material/dialog';
import { ModalComponent } from 'src/app/modal/modal.component';
import { ErrorRegisterModalComponent } from 'src/app/modal/errorregister-modal.component';


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
  formRegister: RegisterI = {
    firstname: '',
    email: '',
    password: ''
  }

  formAuth: AuthenticateI = {
    email: '',
    password: ''
  }

  response: ReponseI = {
    access_token: '',
    refresh_token: '',
    message: ''
  }
  
  constructor(private router: Router, private fb: FormBuilder, 
    private loginService: LoginService, private api: ApiService, public dialog: MatDialog){
  
  }

  openDialog() {
    this.dialog.open(ModalComponent);
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
  }

  onRegister(){
    this.formRegister.firstname = this.profileForm.controls.name.value;
    this.formRegister.email = this.profileForm.controls.email.value;
    this.formRegister.password = this.profileForm.controls.password.value;
    this.api.register(this.formRegister).subscribe(data => {
      console.log(data);
      
      if(data.message?.includes("Error")){
        this.dialog.open(ErrorRegisterModalComponent);
      }else{
        this.dialog.open(ModalComponent);
      }
    });
    //this.onAuth();
    //this.dialog.open(ModalComponent);
  }

  onAuth(){
    this.formAuth.email = this.profileForm.controls.email.value;
    this.formAuth.password = this.profileForm.controls.password.value;
    this.api.authenticate(this.formAuth).subscribe(data =>{
      this.response = data;
      console.log("data: " + data.access_token)
    });
  }

  
}
