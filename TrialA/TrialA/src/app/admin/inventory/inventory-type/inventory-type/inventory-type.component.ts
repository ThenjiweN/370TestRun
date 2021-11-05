import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';  
import { ApiService } from '../../../../service/api.service';  
import { InventoryType } from 'src/app/model/inventory-type';
import { FormBuilder, Validators,  } from '@angular/forms'; 

@Component({
  selector: 'app-inventory-type',
  templateUrl: './inventory-type.component.html',
  styleUrls: ['./inventory-type.component.scss']
})
export class InventoryTypeComponent implements OnInit {

  allInventoryTypes: Observable<InventoryType[]>;  
  TypeID: string;
  Name: string;
  inventoryTypeForm: any; 

  constructor(private apiService:ApiService, private formbulider: FormBuilder) {
   }

  ngOnInit(): void {
    this.loadallInventoryTypes()
    this.inventoryTypeForm = this.formbulider.group({  
      Name: ['', [Validators.required]],   
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


  getInvTypeById(ID: string) {    
    this.apiService.getInvTypeById(ID).subscribe(Response => {  
      this.TypeID = Response.TypeID
      this.inventoryTypeForm.controls['Name'].setValue(Response.Name);
    });  
  }  

  updateInventoryType(invtype: InventoryType) {  
    invtype.TypeID = this.TypeID
    if (confirm("Confirm Inventory Type details?")){
          this.apiService.updateInvType(invtype).subscribe( () => {   
          this.loadallInventoryTypes();
        })}
  }

  deleteInventoryType(ID: string) {  
    if (confirm("Are you sure you want to delete this ?")) {   
    this.apiService.deleteInvTypeById(ID).subscribe(() => {  
      this.loadallInventoryTypes();  
    });  
  }  
}
}
 