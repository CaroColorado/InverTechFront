import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { userLoggedRequestI } from 'src/models/UserLoggedRequest.interface';

@Component({
  selector: 'app-headeruserinfo',
  templateUrl: './headeruserinfo.component.html',
  styleUrls: ['./headeruserinfo.component.css' , '../../assets/css/custom-properties.css', '../../assets/css/reset.css']
})
export class HeaderuserinfoComponent {
  userLoggedRequest: userLoggedRequestI = {
    email : ''
  }
  name: string = "";
  constructor(private api: ApiService){
    this.userLoggedRequest.email = localStorage.getItem('email');
    this.api.loggedUser(this.userLoggedRequest).subscribe(data =>{
      this.name = data.firstname as string;
      this.api.currentUser.email = data.email;
      this.api.currentUser.firstname = data.firstname;
      this.api.currentUser.role = data.role;
      console.log("name...." + this.name);
    });
    
  }

}
