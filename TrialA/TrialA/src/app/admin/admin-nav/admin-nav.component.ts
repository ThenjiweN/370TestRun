import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.scss']
})
export class AdminNavComponent implements OnInit {

admin:boolean;
token:any;

  constructor(private router: Router) { }

  ngOnInit(): void {
/*     this.token = localStorage.getItem("user");
    if (this.token == "admin@gmail.com"){
      this.admin = true;
    } */
  }
 
/*   logout(){
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    this.router.navigate(['./home'])
}  */


}
  