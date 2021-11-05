import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';   
import { ApiService } from 'src/app/service/api.service';   
import { Blog } from 'src/app/model/blog'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent implements OnInit {

  blogForm: any;  

  constructor(private formbulider: FormBuilder, private router: Router, private apiService:ApiService) { }


  createBlog(blog: Blog) {  
    if (confirm("Confirm blog details?")){
          this.apiService.createBlog(blog).subscribe( () => {              
        })}
      this.onBack();  
  }
    
  onBack(){
    this.router.navigate(['./blog']);
  } 

  ngOnInit(): void {
    this.blogForm = this.formbulider.group({  
      Title: ['', [Validators.required]],
      Content: ['', [Validators.required]],
      });  
    }
}
 