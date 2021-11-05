import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-nav',
  templateUrl: './client-nav.component.html',
  styleUrls: ['./client-nav.component.scss']
})
export class ClientNavComponent implements OnInit {

  admin:boolean;
  token:any;
  
    constructor(private router: Router) { }
  
    ngOnInit(): void { 
      this.token = localStorage.getItem("user");
      if (this.token == "admin@gmail.com"){
        this.admin = false; }
        else {
          this.admin = true;
        }
      }
    
    logout(){
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
      this.router.navigate(['./home'])
  }

}
  