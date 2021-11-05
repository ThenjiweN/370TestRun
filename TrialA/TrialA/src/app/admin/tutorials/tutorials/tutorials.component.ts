import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';  
import { ApiService } from 'src/app/service/api.service'; 
import { Tutorials } from 'src/app/model/tutorials';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.scss']
})
export class TutorialsComponent implements OnInit {

  allTutorials: Observable<Tutorials[]>;   
  ID: string;
  Title: string;
  Desription: string;
  Url: string; //blob?
  tutorialForm: any;

  constructor(private apiService:ApiService, private formbulider: FormBuilder) {
   }

  ngOnInit(): void {
    this.loadAllTutorials()
    this.tutorialForm = this.formbulider.group({  
      Title: ['', [Validators.required]],
      Desription: ['', [Validators.required]],
      Url: ['', [Validators.required]],
    });  
  } 

   loadAllTutorials() {  
    this.allTutorials = this.apiService.getAllTutorial();  
  }

  createTutorial(tutorial: Tutorials) {  
    if (confirm("Confirm tutorial details?")){
          this.apiService.createTutorial(tutorial).subscribe( () => {       
            this.loadAllTutorials();     
        })}
  }
 

  getTutorialById(ID: string) {    
    this.apiService.getTutorialById(ID).subscribe(Response => {  
      this.ID = Response.ID
      this.tutorialForm.controls['Title'].setValue(Response.Title);
      this.tutorialForm.controls['Desription'].setValue(Response.Desription);
      this.tutorialForm.controls['Url'].setValue(Response.Url);
    });  
  }  

  updateTutorial(tutorial: Tutorials) {  
    tutorial.ID = this.ID
    if (confirm("Confirm hair tutorial details?")){
          this.apiService.updateTutorial(tutorial).subscribe( () => {   
          this.loadAllTutorials();
        })}
  }


  deleteTutorial(ID: string) {  
    if (confirm("Are you sure you want to delete this ?")) {   
    this.apiService.deleteTutorialById(ID).subscribe(() => {  
      this.loadAllTutorials();  
    });  
  }  
}

}
 