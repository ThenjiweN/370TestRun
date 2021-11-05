import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';   
import { ApiService } from '../../../../service/api.service';  
import { Suburb } from 'src/app/model/suburb';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-suburb',
  templateUrl: './create-suburb.component.html',
  styleUrls: ['./create-suburb.component.scss']
})
export class CreateSuburbComponent implements OnInit {

  suburbForm: any;    

  constructor(private formbulider: FormBuilder, private router: Router, private apiService:ApiService) { }
  

createSuburb(suburb: Suburb) {  
  if (confirm("Confirm suburb details?")){
        this.apiService.createSuburb(suburb).subscribe( () => {              
      })}
    this.onBack();  
}
 
onBack(){
  this.router.navigate(['./suburb']);
}

ngOnInit(): void {
  this.suburbForm = this.formbulider.group({  
    Name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],   
    CityID: ['',[Validators.required]]
    }); 
  }

}
 