import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';   
import { ApiService } from '../../../../service/api.service';  
import { InventoryItem } from 'src/app/model/inventory-item'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-inventory-item',
  templateUrl: './create-inventory-item.component.html',
  styleUrls: ['./create-inventory-item.component.scss']
})
export class CreateInventoryItemComponent implements OnInit {

  inventoryItemForm: any;  

  constructor(private formbulider: FormBuilder, private router: Router, private apiService:ApiService) { }


  createInventoryItem(inventoryItem: InventoryItem) {  
    if (confirm("Confirm inventory-item details?")){
          this.apiService.createInventoryItem(inventoryItem).subscribe( () => {              
        })}
      this.onBack();  
  }
  
  onBack(){
    this.router.navigate(['./inventory-item']);
  }

  ngOnInit(): void {
    this.inventoryItemForm = this.formbulider.group({  
      Name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],  
      }); 
    }

}
 