import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';   
import { ApiService } from 'src/app/service/api.service';   
import { Tutorials } from 'src/app/model/tutorials'; 
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-tutorials',
  templateUrl: './create-tutorials.component.html',
  styleUrls: ['./create-tutorials.component.scss']
})
export class CreateTutorialsComponent implements OnInit {

  tutorialForm: any;  

  constructor(private formbulider: FormBuilder, private router: Router, private apiService:ApiService) { }


  createTutorial(tutorial: Tutorials) {  
    if (confirm("Confirm tutorial details?")){
          this.apiService.createTutorial(tutorial).subscribe( () => {              
        })}
      this.onBack();  
  }
    
  onBack(){
    this.router.navigate(['./tutorials']);
  }

  ngOnInit(): void {
    this.tutorialForm = this.formbulider.group({  
      Title: ['', [Validators.required]],
      Content: ['', [Validators.required]],
      });  
    }


 

}
 

