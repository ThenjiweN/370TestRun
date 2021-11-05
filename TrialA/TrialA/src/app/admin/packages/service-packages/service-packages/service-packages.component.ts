import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';  
import { ApiService } from '../../../../service/api.service';  
import { Package } from 'src/app/model/package'; 
import { FormBuilder, Validators,  } from '@angular/forms'; 

@Component({
  selector: 'app-service-packages',
  templateUrl: './service-packages.component.html',
  styleUrls: ['./service-packages.component.scss']
})
export class ServicePackagesComponent implements OnInit {

  allPackages: Observable<Package[]>; 
  ID: string;
  Name: string;
  Description: string;
  Duration: string;
  Price: number; //decimal
  packageForm: any;  

  constructor(private apiService:ApiService, private formbulider: FormBuilder) { }

  ngOnInit(): void {
    this.loadAllPackages()
    this.packageForm = this.formbulider.group({  
      Name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      Description: ['', [Validators.required]],
      Duration: ['', [Validators.required]],
      Price: ['', [Validators.required]],   
    }); 
  } 
 
  createPackage(pack: Package) {  
    if (confirm("Confirm package details?")){
          this.apiService.createPackage(pack).subscribe( () => {       
            this.loadAllPackages();     
        })}
  }


  getPackageById(ID: string) {    
    this.apiService.getPackageById(ID).subscribe(Response => {  
      this.ID = Response.ID
      this.packageForm.controls['Name'].setValue(Response.Name);
      this.packageForm.controls['Description'].setValue(Response.Description);
      this.packageForm.controls['Duration'].setValue(Response.Duration);
      this.packageForm.controls['Price'].setValue(Response.Price);
    });  
  }  

  updatePackage(pack: Package) {  
    pack.ID = this.ID
    if (confirm("Confirm hair package details?")){
          this.apiService.updatePackage(pack).subscribe( () => {   
          this.loadAllPackages();
        })}
  }

   loadAllPackages() {  
    this.allPackages = this.apiService.getAllPackage();  
  }

  deletePackage(ID: string) {  
    if (confirm("Are you sure you want to delete this ?")) {   
    this.apiService.deletePackageById(ID).subscribe(() => {  
      this.loadAllPackages();  
    });  
  }  
}

}
 