import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';   
import { ApiService } from '../../../../service/api.service';  
import { Package } from 'src/app/model/package';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-service-package',
  templateUrl: './create-service-package.component.html',
  styleUrls: ['./create-service-package.component.scss']
})
export class CreateServicePackageComponent implements OnInit {

  packageForm: any;  

  constructor(private formbulider: FormBuilder, private router: Router, private apiService:ApiService) { }


createPackage(pack: Package) {  
  if (confirm("Confirm package details?")){
        this.apiService.createPackage(pack).subscribe( () => {              
      })}
    this.onBack();  
}
  
onBack(){
  this.router.navigate(['./service-packages']);
}

ngOnInit(): void {
   this.packageForm = this.formbulider.group({  
    Name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    Description: ['', [Validators.required]],
    Duration: ['', [Validators.required]],
    Price: ['', [Validators.required]], 
    });  
  }
}
 