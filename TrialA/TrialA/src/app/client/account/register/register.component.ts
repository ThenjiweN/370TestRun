import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';   
import { ApiService } from 'src/app/service/api.service';   
import { User } from 'src/app/model/user'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  regForm: any; 
 
  constructor(private formbulider: FormBuilder, private router: Router, private apiService:ApiService) { }
  
  ngOnInit() {
    this.regForm = this.formbulider.group({  
      UserEmail: ['', [Validators.required]],
      UserPassword: ['', [Validators.required]],
      });  
    }

  createUser(user:User) {  
    this.apiService.createUser(user).subscribe( (res:User) => {  
    console.log(res);  
    localStorage.setItem("accessToken", res.SessionID);
    localStorage.setItem("user", res.UserEmail);
    this.router.navigate(["./home"])          
    })
  }
}
 