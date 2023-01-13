import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';



let users: any = [
  {name: "Carolina", email: "caro@email.com", password:"123"},
  {name: "Luisa", email: "luisa@email.com", password:"456"}
]
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  validateUser(profileForm:FormGroup){
    const isUserValid = users.some((user:any) => {
      return user.email === profileForm.get("email")?.value && user.password === profileForm.get("password")?.value
    })
    return isUserValid;
  }
  addUser(user:any){
    users = users + user;
    console.log(users)
  }
}
