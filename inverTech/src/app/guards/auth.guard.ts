import { state } from '@angular/animations';
import { ApiService } from './../services/api.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private apiServ: ApiService, private router: Router) { }

  canActivate(): boolean {
    if(this.apiServ.isLoggedIn == false){
      console.log('authguard ' +this.apiServ.isLoggedIn)
      this.router.navigate(["/login"])
      return false;
    }else{
      return true;
    }
    
  }

}