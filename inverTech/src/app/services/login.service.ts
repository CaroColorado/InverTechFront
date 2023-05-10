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
  currentUser: any;
  constructor() { }

  validateUser(profileForm:FormGroup){
    let email: string = profileForm.get("email")?.value;
    const isUserValid = users.some((user:any) => {
      return user.email === email && user.password === profileForm.get("password")?.value
    })
    if(isUserValid){
      
      this.currentUser = users.find((user:any) => {
        return user.email === email;
      })
    }
    return isUserValid;
  }
  addUser(user:any){
    users = users + user;
    console.log(users)
  }
}
