import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupstatus:Boolean = false;

  constructor(private userService: UserService, private router:Router) { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    name : new FormControl(),
    email : new FormControl(),
    phoneNo : new FormControl(),
    password : new FormControl(),
    confirmpassword : new FormControl()
  });


  signupcredentials: any;
  CreateUser(){
    if(this.form.value.password == this.form.value.confirmpassword && this.form.value.name != null && this.form.value.email !=null && this.form.value.phoneNo!=null && this.form.value.password!=null){
      this.userService.checkUser(this.form.value.email).subscribe(res=>{
        if(res!=null){
          this.signupstatus = true;
        }
        else{
          let userObj ={
            "name":this.form.value.name,
            "email":this.form.value.email,
            "phoneNo":this.form.value.phoneNo,
            "password":this.form.value.password
          }
          this.userService.registerUser(JSON.stringify(userObj)).subscribe(resp=>{
            if(resp==null){
              this.signupstatus = true;
            }
            else{
              sessionStorage.setItem("userid",resp["id"]);
              sessionStorage.setItem("loginstatus","true");
              this.router.navigate(['/main'])
              .then(() => {
                window.location.reload();
              });
            
            }
          })
        }
      })
    }
    else{
      this.signupstatus = true;
    }
  }
}
