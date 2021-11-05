import { flatten } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NdoNandiA';

  admin:boolean;
  token:any;
  customer:boolean;
  
    constructor(private router: Router) { }
  
    ngOnInit(): void {
/*       this.token = localStorage.getItem("user");
      if (this.token == "admin@gmail.com"){
        this.admin = true;
        this.customer = false;
      }
      else{
        this.customer = true;
        this.admin = false;
      } */
    }
  
/*     logout(){
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
      this.router.navigate(['./home'])
  } */


}
