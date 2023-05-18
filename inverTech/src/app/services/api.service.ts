import { Injectable } from '@angular/core';
import {RegisterI} from '../../models/register.interface';
import {AuthenticateI} from '../../models/authenticate.interface';
import {ReponseI} from '../../models/reponse.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = 'http://localhost:8080/api/v1/auth/';

  constructor(private http:HttpClient) { }


  register(form: RegisterI):Observable<ReponseI>{
    let dir = this.url + 'register';
    return this.http.post<ReponseI>(dir, form);
  }

  authenticate(form: AuthenticateI):Observable<ReponseI>{
    let dir = this.url + 'authenticate';
    return this.http.post<ReponseI>(dir, form);
  }
}
