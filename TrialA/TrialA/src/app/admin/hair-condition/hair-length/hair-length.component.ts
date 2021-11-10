import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';  
import { ApiService } from '../../../service/api.service';  
import { Length } from 'src/app/model/length';

@Component({
  selector: 'app-hair-length',
  templateUrl: './hair-length.component.html',
  styleUrls: ['./hair-length.component.scss']
})
export class HairLengthComponent implements OnInit {
 
  allLengths: Observable<Length[]>; 
  lengthForm: any;
  name: string; 
  id: string;

  constructor(private apiService:ApiService,  private formbulider: FormBuilder) {
  }

 ngOnInit(): void {
   this.loadAllLengths()
   this.lengthForm = this.formbulider.group({  
    name: ['', [Validators.required]],   
  });
 } 

  loadAllLengths() {  
   this.allLengths = this.apiService.getAllLength();  
 }
 
 createLength(length: Length) {  
  if (confirm("Confirm hair length details?")){
        this.apiService.createLength(length).subscribe( () => {       
          this.loadAllLengths();     
      })}
}  


getLengthById(id: string) {    
  this.apiService.getLengthById(id).subscribe(Response => {  
    this.id = Response.id
    this.lengthForm.controls['name'].setValue(Response.name);
  });  
}  

updateLength(length: Length) {  
  length.id = this.id
  if (confirm("Confirm hair length details?")){
        this.apiService.updateLength(length).subscribe( () => {   
        this.loadAllLengths();
      })}
}

 deleteLength(id: string) {  
   if (confirm("Are you sure you want to delete this ?")) {   
   this.apiService.deleteLengthById(id).subscribe(() => {  
     this.loadAllLengths();  
   });  
 }  
} 

}
  