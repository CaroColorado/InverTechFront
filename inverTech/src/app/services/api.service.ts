import { Injectable } from '@angular/core';
import {RegisterI} from '../../models/register.interface';
import {AuthenticateI} from '../../models/authenticate.interface';
import {ReponseI} from '../../models/reponse.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs'
import { userLoggedResponseI } from 'src/models/UserLoggedResponse.interface';
import { userLoggedRequestI } from 'src/models/UserLoggedRequest.interface';
import { IsFirstTimeResponse } from 'src/models/IsFirstTimeResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = 'http://localhost:8080/api/v1/auth/';
  
  access_token:String | null = "";

  isLoggedIn:boolean = false;

  response: ReponseI = {
    access_token: '',
    refresh_token: '',
    message: ''
  }

  currentUser : userLoggedResponseI = {
    firstname: '',
    email: '',
    role: '',
    premium: false,
    firstTime: false
  }

  constructor(private http:HttpClient) { }


  register(form: RegisterI):Observable<ReponseI>{
    let dir = this.url + 'register';
    return this.http.post<ReponseI>(dir, form);
  }

  authenticate(form: AuthenticateI):Observable<ReponseI>{
    let dir = this.url + 'authenticate';
    return this.http.post<ReponseI>(dir, form);
  }

  loggedUser(email: userLoggedRequestI):Observable<userLoggedResponseI>{
    let dir = 'http://localhost:8080/api/v1/user/getUserLoggedData';
    return this.http.post<userLoggedResponseI>(dir, email);
  }

  setPremium(email: userLoggedRequestI):Observable<userLoggedResponseI>{
    let dir = 'http://localhost:8080/api/v1/user/setUserPremium';
    return this.http.post<userLoggedResponseI>(dir, email);
  }

  isFirstTime(email: userLoggedRequestI):Observable<IsFirstTimeResponse>{
    let dir = "http://localhost:8080/api/v1/user/isFirstTime"
    return this.http.post<IsFirstTimeResponse>(dir, email);
  }
  setFirstTimeFalse(email: userLoggedRequestI):Observable<IsFirstTimeResponse>{
    let dir = 'http://localhost:8080/api/v1/user/setFirstTimeFalse';
    return this.http.post<IsFirstTimeResponse>(dir, email);
  }
  
}
