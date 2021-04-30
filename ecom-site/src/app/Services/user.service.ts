import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userurl :any =environment.baseUrl +'/user';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    }),
  }


  constructor(private http: HttpClient) {
   }

  checkUserLogin(email:string, password:string){
    return this.http.post(this.userurl+"/login?email="+email+"&password="+password,this.httpOptions);
  }

  checkUser(email:string){
    return this.http.post(this.userurl+"/usercheck?email="+email,this.httpOptions);
  }

  registerUser(userObj:any){
    return this.http.post(this.userurl+"/register",userObj,this.httpOptions);
  }
}
