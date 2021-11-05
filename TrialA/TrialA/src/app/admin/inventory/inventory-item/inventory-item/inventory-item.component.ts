import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';  
import { ApiService } from '../../../../service/api.service';  
import { InventoryItem } from 'src/app/model/inventory-item';
import { FormBuilder, Validators,  } from '@angular/forms'; 


@Component({
  selector: 'app-inventory-item',
  templateUrl: './inventory-item.component.html',
  styleUrls: ['./inventory-item.component.scss']
})
export class InventoryItemComponent implements OnInit {

  allInventoryItems: Observable<InventoryItem[]>; 
  ID: string;
  Name: string;
  Description: string;
  Quantity: number;
  TypeID: number;
  inventoryItemForm: any;    

  constructor(private apiService:ApiService, private formbulider: FormBuilder) {
   }

  ngOnInit(): void {
    this.loadAllInventoryItems()
    this.inventoryItemForm = this.formbulider.group({  
      Name: ['', [Validators.required]],   
      Description: ['', [Validators.required]], 
      Quantity: ['', [Validators.required]], 
      TypeID: ['', [Validators.required]],     
    }); 
  }  
 
   loadAllInventoryItems() {  
    this.allInventoryItems = this.apiService.getAllInventoryItem();  
  }

  createInventoryItem(inventoryItem: InventoryItem) {  
    if (confirm("Confirm InventoryItem details?")){
          this.apiService.createInventoryItem(inventoryItem).subscribe( () => {       
            this.loadAllInventoryItems();     
        })}
  }


  getInventoryItemById(ID: string) {    
    this.apiService.getInventoryItemById(ID).subscribe(Response => {  
      this.ID = Response.ID
      this.inventoryItemForm.controls['Name'].setValue(Response.Name);
      this.inventoryItemForm.controls['Description'].setValue(Response.Description);
      this.inventoryItemForm.controls['Quantity'].setValue(Response.Quantity);
      this.inventoryItemForm.controls['TypeID'].setValue(Response.TypeID);
    });  
  }  

  updateInventoryItem(InventoryItem: InventoryItem) {  
    InventoryItem.ID = this.ID
    if (confirm("Confirm hair InventoryItem details?")){
          this.apiService.updateInventoryItem(InventoryItem).subscribe( () => {   
          this.loadAllInventoryItems();
        })}
  }

  deleteInventoryItem(ID: string) {  
    if (confirm("Are you sure you want to delete this ?")) {   
    this.apiService.deleteInventoryItemById(ID).subscribe(() => {  
      this.loadAllInventoryItems();  
    });  
  }  
}

} 
