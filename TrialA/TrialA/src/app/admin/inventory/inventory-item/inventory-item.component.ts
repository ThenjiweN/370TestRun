import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';  
import { ApiService } from '../../../service/api.service';  
import { InventoryItem } from 'src/app/model/inventory-item';
import { FormBuilder, Validators,  } from '@angular/forms'; 

 
@Component({
  selector: 'app-inventory-item',
  templateUrl: './inventory-item.component.html',
  styleUrls: ['./inventory-item.component.scss']
})
export class InventoryItemComponent implements OnInit {

  allInventoryItems: Observable<InventoryItem[]>; 
  id: string;
  name: string;
  itemDesc: string;
  typeID: number;
  inventoryItemForm: any;    

  constructor(private apiService:ApiService, private formbulider: FormBuilder) {
   }

  ngOnInit(): void {
    this.loadAllInventoryItems()
    this.inventoryItemForm = this.formbulider.group({  
      name: ['', [Validators.required]],   
      itemDesc: ['', [Validators.required]], 
      typeID: ['', [Validators.required]],     
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


  getInventoryItemById(id: string) {    
    this.apiService.getInventoryItemById(id).subscribe(Response => {  
      this.id = Response.id
      this.inventoryItemForm.controls['name'].setValue(Response.name);
      this.inventoryItemForm.controls['itemDesc'].setValue(Response.itemDesc);
      this.inventoryItemForm.controls['typeID'].setValue(Response.typeID);
    });  
  }  

  updateInventoryItem(InventoryItem: InventoryItem) {  
    InventoryItem.id = this.id
    if (confirm("Confirm hair InventoryItem details?")){
          this.apiService.updateInventoryItem(InventoryItem).subscribe( () => {   
          this.loadAllInventoryItems();
        })}
  }

  deleteInventoryItem(id: string) {  
    if (confirm("Are you sure you want to delete this ?")) {   
    this.apiService.deleteInventoryItemById(id).subscribe(() => {  
      this.loadAllInventoryItems();  
    });  
  }  
}

} 
