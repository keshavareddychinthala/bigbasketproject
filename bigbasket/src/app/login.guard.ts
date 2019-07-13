import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate  {
  canActivate():boolean
  {
  var take=window.confirm("its entering in to login");
  if(take){
    return true;
  }
  else {
    return false;
  }
  }
  }
  

