import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { ContentService } from 'src/app/services/content.service';
import content from 'src/interfaces/content.interface';
import { userLoggedResponseI } from 'src/models/UserLoggedResponse.interface';
import { userLoggedRequestI } from 'src/models/UserLoggedRequest.interface';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-learningsection',
  templateUrl: './learningsection.component.html',
  styleUrls: ['./learningsection.component.css']
})
export class LearningsectionComponent implements OnInit {
  
  userLoggedRequest: userLoggedRequestI = {
    email : ''
  }
  contents : content[];

  user: userLoggedResponseI = {
    firstname : '',
    email : '',
    role : '',
    premium : false,
    firstTime: false
  }
  isPremium: boolean = false;


  constructor(private contentService : ContentService, private api: ApiService) { 
    this.contents = [];
    this.userLoggedRequest.email = localStorage.getItem('email');
    this.api.loggedUser(this.userLoggedRequest).subscribe(data =>{
      this.user.email = data.email;
      this.user.firstname = data.firstname;
      this.user.role = data.role;
      this.user.premium = data.premium;
      this.isPremium = data.premium;
      console.log("Tipo de acceso: " + this.user.premium);
    });
    
  }

  ngOnInit() {
    
  }
  ngAfterViewInit(){
    this.contentService.getContent().subscribe(contents=>{
      this.contents = contents;
    })
  }

  canAccess(content:boolean):boolean{
    //content.isPremium && this.user.premium
    if(this.user.premium){
      return true;
    }
    else if(!content){
      return true;
    }else{
      return false;
    }
  }


}
