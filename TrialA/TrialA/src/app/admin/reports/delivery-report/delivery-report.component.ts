import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../app/service/api.service'; 
import { Input, Inject } from '@angular/core';
declare let jsPDF;

@Component({
  selector: 'app-delivery-report',
  templateUrl: './delivery-report.component.html',
  styleUrls: ['./delivery-report.component.scss']
})
export class DeliveryReportComponent implements OnInit {

  TableData : any;

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.submitRequest();
  }

  downloadPDF(){
    this.apiService.deliveryReport().subscribe((response) =>{
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
    this.apiService.deliveryReport().subscribe((response) =>{
      console.log(response);
      this.TableData = response['TableData'];
    })
}

}
 