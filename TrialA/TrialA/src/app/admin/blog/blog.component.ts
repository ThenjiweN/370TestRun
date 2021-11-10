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
  id: string;
  title: string;
  content: string;
  date: Date; //not sure
  image: string;  //blob?
  blogForm;

  constructor(private apiService:ApiService, private router: Router, private formbulider: FormBuilder) {}

  ngOnInit(): void {
    this.loadAllBlogs();
    this.blogForm = this.formbulider.group({  
      title: ['', [Validators.required]], 
      content: ['', [Validators.required]], 
      image: ['', [Validators.required]]  
    });  
  } 

   loadAllBlogs() {  
    this.allBlogs = this.apiService.getAllBlog();  
  }
 


  createBlog(blog: Blog) {  
    if (confirm("Confirm Blog details?")){
          this.apiService.createBlog(blog).subscribe( () => {       
            this.loadAllBlogs();     
        })}
  }


  getBlogById(id: string) {    
    this.apiService.getBlogById(id).subscribe(Response => {  
      this.id = Response.id
      this.blogForm.controls['title'].setValue(Response.title);
      this.blogForm.controls['content'].setValue(Response.content);
      this.blogForm.controls['image'].setValue(Response.image);
    });  
  }  

  updateBlog(blog: Blog) {  
    blog.id = this.id
    if (confirm("Confirm Blog details?")){
          this.apiService.updateBlog(blog).subscribe( () => {   
          this.closebutton.nativeElement.click();  
          this.loadAllBlogs();
        })}
  }


  deleteBlog(id: string) {  
    if (confirm("Are you sure you want to delete this ?")) {   
    this.apiService.deleteBlogById(id).subscribe(() => {  
      this.loadAllBlogs();  
    });  
  }  
}

}
  