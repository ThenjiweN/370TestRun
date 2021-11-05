import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';   
import { ApiService } from 'src/app/service/api.service';   
import { User } from 'src/app/model/user'; 
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  loginForm: any;
  errorMessage: string;
  showError = false;
  
  constructor( private formbulider: FormBuilder, private router: Router, private apiService:ApiService) { }
 
  ngOnInit() {
    this.loginForm = this.formbulider.group({  
      UserEmail: ['', [Validators.required]],
      UserPassword: ['', [Validators.required]]
      }) 
    if (localStorage.getItem("accessToken")){
      this.router.navigate(["./home"])
    }
  }


  Login(user:User) {
    this.apiService.login(user).subscribe((res:any) =>{
      console.log(res);
      if (res.Error) {
        this.errorMessage = res.Error;
        this.showError = true;      
      } else {
        localStorage.setItem("accessToken" ,res.SessionID);
        this.authenticateUser(user.UserEmail);
        this.showError = false;
      }
    })
  }


  authenticateUser(UserEmail){
    localStorage.setItem("user", UserEmail);
    if(UserEmail == "admin@gmail.com"){
      this.router.navigate(['/dashboard']);
    } else { 
      this.router.navigate(['/home']);
    } 
  }
}
 