import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../app/service/api.service'; 

@Component({
  selector: 'app-product-report',
  templateUrl: './product-report.component.html',
  styleUrls: ['./product-report.component.scss']
})
export class ProductReportComponent implements OnInit {

  TableData : any;

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.submitRequest();
  }

  submitRequest()
  {
    this.apiService.productReport().subscribe((response) =>{
      console.log(response);
      this.TableData = response['TableData'];
    })
}

}
