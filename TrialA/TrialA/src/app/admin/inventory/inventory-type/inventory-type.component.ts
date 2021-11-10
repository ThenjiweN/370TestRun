import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';  
import { ApiService } from '../../../service/api.service';  
import { InventoryType } from 'src/app/model/inventory-type';
import { FormBuilder, Validators,  } from '@angular/forms'; 

@Component({
  selector: 'app-inventory-type',
  templateUrl: './inventory-type.component.html',
  styleUrls: ['./inventory-type.component.scss']
})
export class InventoryTypeComponent implements OnInit {

  allInventoryTypes: Observable<InventoryType[]>;  
  typeID: string;
  name: string;
  inventoryTypeForm: any; 

  constructor(private apiService:ApiService, private formbulider: FormBuilder) {
   }

  ngOnInit(): void {
    this.loadallInventoryTypes()
    this.inventoryTypeForm = this.formbulider.group({  
      name: ['', [Validators.required]],   
    }); 
  } 
 
   loadallInventoryTypes() {  
    this.allInventoryTypes = this.apiService.getAllInvType();  
  }

  createInventoryType(InvType: InventoryType) {  
    if (confirm("Confirm Inventory Type details?")){
          this.apiService.createInvTypes(InvType).subscribe( () => {       
            this.loadallInventoryTypes();     
        })}
  }


  getInvTypeById(id: string) {    
    this.apiService.getInvTypeById(id).subscribe(Response => {  
      this.typeID = Response.typeID
      this.inventoryTypeForm.controls['name'].setValue(Response.name);
    });  
  }  

  updateInventoryType(invtype: InventoryType) {  
    invtype.typeID = this.typeID
    if (confirm("Confirm Inventory Type details?")){
          this.apiService.updateInvType(invtype).subscribe( () => {   
          this.loadallInventoryTypes();
        })}
  }

  deleteInventoryType(id: string) {  
    if (confirm("Are you sure you want to delete this ?")) {   
    this.apiService.deleteInvTypeById(id).subscribe(() => {  
      this.loadallInventoryTypes();  
    });  
  }  
}
}
 