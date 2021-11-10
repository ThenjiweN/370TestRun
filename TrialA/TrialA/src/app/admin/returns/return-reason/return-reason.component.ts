import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';  
import { ApiService } from '../../../service/api.service';  
import { FormBuilder, Validators,  } from '@angular/forms'; 
import { ReturnReason } from 'src/app/model/return-reason';

@Component({
  selector: 'app-return-reason',
  templateUrl: './return-reason.component.html',
  styleUrls: ['./return-reason.component.scss']
})
export class ReturnReasonComponent implements OnInit {

  allReasons: Observable<ReturnReason[]>;   
  id: string;
  name: string;
  reasonForm: any; 

  constructor(private apiService:ApiService, private formbulider: FormBuilder) {
   }
 
  ngOnInit(): void {
    this.loadAllReason();
    this.reasonForm = this.formbulider.group({  
      name: ['', [Validators.required]],   
    });  
  } 
 
   loadAllReason() {  
    this.allReasons = this.apiService.getAllReason();  
  }

  createReason(reason: ReturnReason) {  
    if (confirm("Confirm reason details?")){
          this.apiService.createReason(reason).subscribe( () => {       
            this.loadAllReason();     
        })}
  }


  getReasonById(id: string) {    
    this.apiService.getReasonById(id).subscribe(Response => {  
      this.id = Response.id
      this.reasonForm.controls['name'].setValue(Response.name);
    });  
  }  

  updateReason(reason: ReturnReason) {  
    reason.id = this.id
    if (confirm("Confirm hair reason details?")){
          this.apiService.updateReason(reason).subscribe( () => {   
          this.loadAllReason();
        })}
  }

  deleteReason(id: string) {  
    if (confirm("Are you sure you want to delete this ?")) {   
    this.apiService.deleteReasonById(id).subscribe(() => {  
      this.loadAllReason();  
    });  
  }  
}

}
