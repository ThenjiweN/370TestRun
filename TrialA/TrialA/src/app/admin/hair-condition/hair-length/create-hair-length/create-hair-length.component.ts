import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';   
import { ApiService } from '../../../../service/api.service';  
import { Length } from 'src/app/model/length';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-hair-length',
  templateUrl: './create-hair-length.component.html',
  styleUrls: ['./create-hair-length.component.scss']
})
export class CreateHairLengthComponent implements OnInit {

  lengthForm: any;  

  constructor(private formbulider: FormBuilder, private router: Router, private apiService:ApiService) { }
  

createLength(length: Length) {  
  if (confirm("Confirm hair length details?")){
        this.apiService.createLength(length).subscribe( () => {              
      })}
    this.onBack();  
} 
 
onBack(){
  this.router.navigate(['./hair-length']);
}

ngOnInit(): void {
  this.lengthForm = this.formbulider.group({  
    Name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],   
    }); 
  }

}
 