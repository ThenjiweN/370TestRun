import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  role:any;
  admin:boolean;
  constructor() { }

  public canActivate(route: ActivatedRouteSnapshot){
    let user = localStorage.getItem('user');
    if(user == 'admin@gmail.com'){
      return true;
    }
    return false;
}
}
