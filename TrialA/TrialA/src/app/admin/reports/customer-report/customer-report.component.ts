import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../app/service/api.service'; 
import Chart from 'chart.js/auto';

import { Input, Inject } from '@angular/core';
declare let jsPDF;
 

@Component({
  selector: 'app-customer-report',
  templateUrl: './customer-report.component.html',
  styleUrls: ['./customer-report.component.scss']
})
export class CustomerReportComponent implements OnInit {

  selection: any;
  chart = Chart; 
  TableData : any;
 
  options = [ 
    {id:1 , text: "All Provinces"},
    {id:2 , text: "Gauteng"}, 
    {id:3 , text: "Western Cape"},
    {id:4 , text: "Northern Cape"},
    {id:5 , text: "Eastern Cape"},
    {id:6 , text: "KwaZulu-Natal"},
    {id:7 , text: "Free State"}, 
    {id:8 , text: "Mpumalanga"},
    {id:9 , text: "North West"},
    {id:10 , text: "Limpopo"}
  ];

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
  }

  downloadPDF(){
    this.apiService.customerReport(this.selection).subscribe((response) =>{
      var doc = new jsPDF();

      var Height = doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
      var Width = doc.internal.pageSize.width || doc.internal.pageSize.getWidth();

    let length = response['TableData'].length;
    let titles = response['TableData'].map(z=>z.Province)
    let number = response['TableData'].map(z=>z.Count)

    let finalY = 160;
    var newCanvas = <HTMLCanvasElement>document.querySelector('#canvas');

    var newCanvasImg = newCanvas.toDataURL("imge/png", 1.0);
    
    doc.setFontSize(40)
    doc.text("Shipping Report", 1, 15 )
    doc.addImage(newCanvasImg, 'PNG' , 25,25,160,150)
    doc.setFontSize(14)
    for (let i = 0; i< length; i++)
    {
      doc.text(titles[i]+ "Number of customers:"+ number, (Width /2) -25, finalY + 23 )
      doc.autoTable({startY: finalY + 25, html: '#testing' +i, useCss: true, head:[
        ['Customer', 'Title', 'City']
      ]})
      finalY = doc.autoTable.previous.finalY
    }

      doc.output('dataurlnewwindow')
      doc.save('table.pdf')
  });

  }



  submitRequest()
  {
    this.apiService.customerReport(this.selection).subscribe((response) =>{
      console.log(response);
      this.TableData = response['TableData'];

       let keys = response["ChartData"].map(z=>z.Province);
      let value = response["ChartData"].map(z=>z.Count);

      var chart = new Chart('canvas',{
        type: 'bar',
        data: {
            labels: keys,
            datasets: [{
                label: 'Number of Customers per Province',
                data: value,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y:{
                        beginAtZero: true,
                    }
            }
        }
    }); 
      
    }
    )}
}
 