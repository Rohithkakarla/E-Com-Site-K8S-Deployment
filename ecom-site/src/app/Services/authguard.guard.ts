import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  
  constructor(private router:Router){}

  canActivate(){
    if(sessionStorage.getItem("loginstatus")!=null && sessionStorage.getItem("userid")!=null){
      return true;
    }
    else{
      this.router.navigate(['/home']);
      return false;
    }
  }
  
}
