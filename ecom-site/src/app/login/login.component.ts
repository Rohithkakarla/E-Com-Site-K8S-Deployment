import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:Boolean = false;
  constructor(private userService: UserService, private router:Router) { }

  ngOnInit(): void {
  }

  emailform = new FormGroup({
    email : new FormControl(),
    password : new FormControl()
  });

  checkLogin(){
    let email = this.emailform.value.email;
    let password = this.emailform.value.password;
    if(email!=null && password!=null){

      this.userService.checkUserLogin(email,password).subscribe(response => {
        if(response == null){
          this.login = true;
        }
        else{
          if(response['email']==email){
            this.login = false;
            this.router.navigate(['/main'])
            .then(() => {
              window.location.reload();
            });
            sessionStorage.setItem("userid",response["id"]);
            sessionStorage.setItem("loginstatus","true");
          }
        }
      })
    }
    else{
      this.login = true;
    }
    

  }
}
