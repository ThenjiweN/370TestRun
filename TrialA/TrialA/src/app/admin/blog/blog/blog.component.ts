import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';  
import { ApiService } from 'src/app/service/api.service'; 
import { Blog } from 'src/app/model/blog'; 
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  @ViewChild('closebutton') closebutton;
  allBlogs: Observable<Blog[]>;   
  ID: string;
  Title: string;
  Content: string;
  Date: Date; //not sure
  PictureUrl: string;  //blob?
  blogForm

  constructor(private apiService:ApiService, private router: Router, private formbulider: FormBuilder) {}

  ngOnInit(): void {
    this.loadAllBlogs();
    this.blogForm = this.formbulider.group({  
      Title: ['', [Validators.required]], 
      Content: ['', [Validators.required]], 
      PictureUrl: ['', [Validators.required]]  
    });  
  } 

   loadAllBlogs() {  
    this.allBlogs = this.apiService.getAllBlog();  
  }
 


  createBlog(blog: Blog) {  
    if (confirm("Confirm hair Blog details?")){
          this.apiService.createBlog(blog).subscribe( () => {       
            this.loadAllBlogs();     
        })}
  }


  getBlogById(ID: string) {    
    this.apiService.getBlogById(ID).subscribe(Response => {  
      this.ID = Response.ID
      this.blogForm.controls['Title'].setValue(Response.Title);
      this.blogForm.controls['Content'].setValue(Response.Content);
      this.blogForm.controls['PictureUrl'].setValue(Response.PictureUrl);
    });  
  }  

  updateBlog(blog: Blog) {  
    blog.ID = this.ID
    if (confirm("Confirm hair Blog details?")){
          this.apiService.updateBlog(blog).subscribe( () => {   
          this.closebutton.nativeElement.click();  
          this.loadAllBlogs();
        })}
  }


  deleteBlog(ID: string) {  
    if (confirm("Are you sure you want to delete this ?")) {   
    this.apiService.deleteBlogById(ID).subscribe(() => {  
      this.loadAllBlogs();  
    });  
  }  
}

}
  