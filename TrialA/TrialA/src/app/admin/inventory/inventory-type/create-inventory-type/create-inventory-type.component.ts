import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';   
import { ApiService } from '../../../../service/api.service';  
import { InventoryType } from 'src/app/model/inventory-type'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-inventory-type',
  templateUrl: './create-inventory-type.component.html',
  styleUrls: ['./create-inventory-type.component.scss']
})
export class CreateInventoryTypeComponent implements OnInit {

  inventoryTypeForm: any;  

  constructor(private formbulider: FormBuilder, private router: Router, private apiService:ApiService) { }
 

  createInventoryType(inventoryType: InventoryType) {  
    if (confirm("Confirm inventory type details?")){
          this.apiService.createInvTypes(inventoryType).subscribe( () => {              
        })}
      this.onBack();  
  }
  
  onBack(){
    this.router.navigate(['./inventory-type']);
  }

  ngOnInit(): void {
    this.inventoryTypeForm = this.formbulider.group({  
      Name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],  
      }); 
    }

}
 