import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../app/service/api.service'; 
import { Observable } from 'rxjs'; 


@Component({
  selector: 'app-inventory-report',
  templateUrl: './inventory-report.component.html',
  styleUrls: ['./inventory-report.component.scss']
})
export class InventoryReportComponent implements OnInit {

  TableData : any;

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.submitRequest();
  }

  submitRequest()
  {
    this.apiService.inventoryReport().subscribe((response) =>{
      console.log(response);
      this.TableData = response['TableData'];
    })
}
}
 