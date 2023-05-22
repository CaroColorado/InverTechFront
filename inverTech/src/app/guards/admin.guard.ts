import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service'

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private api:ApiService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.api.currentUser.role?.includes('ADMIN')){
        return true;
      }else{
        return true;
      }
  }
  
}
