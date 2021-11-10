import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';   
import { Observable } from 'rxjs'; 
import { map } from 'rxjs/operators';



import { Condition } from '../model/condition';
import { Density } from '../model/density';
import { Length } from '../model/length';
import { User } from '../model/user';
import { Product } from '../model/product';
import { InventoryItem } from '../model/inventory-item';
import { Blog } from '../model/blog';
import { Allergen } from '../model/allergen';
import { Country } from '../model/country';
import { City } from '../model/city';
import { Suburb } from '../model/suburb';
import { Province } from '../model/province';
import { Address } from '../model/address';
import { ProductType } from '../model/product-type';
import { InventoryType } from '../model/inventory-type';
import { Package } from '../model/package';
import { Tutorials } from '../model/tutorials';
import { ReturnReason } from '../model/return-reason';




@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = "https://localhost:44393/api/" 
  httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })};
  
  constructor(private http: HttpClient) { }
  
 // Create User
 createUser(user: User): Observable<User> {    
  return this.http.post<User>(this.baseUrl + '/User/register', user);  
}
// Login
login(user: User): Observable<User> {  
  return this.http.post<User>(this.baseUrl + '/User/Login', user); 
}

//REPORTS
//Inventory 
inventoryReport()
{
  return this.http.get(this.baseUrl + '/inventory/report')
  .pipe(map(result => result));
} 

//customer
customerReport(selection : number)
{
  return this.http.get<any[]>(this.baseUrl + '/customer/report?CustomerSelection='+ selection)
  .pipe(map(result => result));
} 

//Inventory 
deliveryReport()
{
  return this.http.get(this.baseUrl + '/delivery/report')
  .pipe(map(result => result));
} 

//Product 
productReport()
{
  return this.http.get(this.baseUrl + '/product/report')
  .pipe(map(result => result));
} 


 

  //CRUDS
//Allergen
  getAllAllergen(): Observable<Allergen[]> {
    return this.http.get<Allergen[]>(this.baseUrl + 'Allergens'); 
  }

  getAllergenById(id: string): Observable<Allergen> {
    return this.http.get<Allergen>(this.baseUrl + 'Allergens/' + id);
  }

  createAllergen(allergen: Allergen): Observable<Allergen> {  
    return this.http.post<Allergen>(this.baseUrl + 'Allergens', allergen);  
  }  

  updateAllergen(allergen: Allergen): Observable<Allergen> {    
    return this.http.put<Allergen>(this.baseUrl + 'Allergens/'+ allergen.id, allergen);  
  } 

  deleteAllergenById(id: string): Observable<number> {    
    return this.http.delete<number>(this.baseUrl + 'Allergens/' + id);  
  } 

//Return Reason
  getAllReason(): Observable<ReturnReason[]> {
    return this.http.get<ReturnReason[]>(this.baseUrl + 'ReturnReasons'); 
  }

  getReasonById(id: string): Observable<ReturnReason> {
    return this.http.get<ReturnReason>(this.baseUrl + 'ReturnReasons/' + id);
  }

  createReason(reason: ReturnReason): Observable<ReturnReason> {  
    return this.http.post<ReturnReason>(this.baseUrl + 'ReturnReasons', reason);  
  }  

  updateReason(reason: ReturnReason): Observable<ReturnReason> {    
    return this.http.put<ReturnReason>(this.baseUrl + 'ReturnReasons/'+ reason.id, reason);  
  } 

  deleteReasonById(id: string): Observable<number> {    
    return this.http.delete<number>(this.baseUrl + 'ReturnReasons/' + id);  
  } 



//condition cruds
getAllCondition(): Observable<Condition[]> {  
  return this.http.get<Condition[]>(this.baseUrl + 'HairConditions');  
}  

getConditionById(id: string): Observable<Condition> {     
  return this.http.get<Condition>(this.baseUrl + 'HairConditions/' + id);  
}  

createCondition(condition: Condition): Observable<Condition> {      
  return this.http.post<Condition>(this.baseUrl + 'HairConditions', condition);  
}  

 updateCondition(condition: Condition){  
  return this.http.put(this.baseUrl + 'HairConditions/'+ condition.id, condition);  
}   

deleteConditionById(id: string): Observable<number> {  
  return this.http.delete<number>(this.baseUrl + 'HairConditions/' + id);  
} 




      //Tutorials cruds
getAllTutorial(): Observable<Tutorials[]> {  
  return this.http.get<Tutorials[]>(this.baseUrl + 'tutorial');  
}  

getTutorialById(ID: string): Observable<Tutorials> {  
  return this.http.get<Tutorials>(this.baseUrl + 'tutorial/' + ID);  
}  

createTutorial(tutorials: Tutorials): Observable<Tutorials> {  
   
  return this.http.post<Tutorials>(this.baseUrl + 'tutorial', tutorials);  
}  

 updateTutorial(tutorials: Tutorials){  
   
  return this.http.put(this.baseUrl + 'tutorial/'+ tutorials.ID, tutorials);  
}   

deleteTutorialById(ID: string): Observable<number> {  
   
  return this.http.delete<number>(this.baseUrl + 'tutorial/' + ID);  
}

  //length cruds
  getAllLength(): Observable<Length[]> {  
    return this.http.get<Length[]>(this.baseUrl + 'HairLengths');  
  }  

  getLengthById(id: string): Observable<Length> {  
    
    return this.http.get<Length>(this.baseUrl + 'HairLengths/' + id);  
  }  
 
  createLength(length: Length): Observable<Length> {  
      
    return this.http.post<Length>(this.baseUrl + 'HairLengths', length);  
  }  

  updateLength(length: Length): Observable<Length> {  
     
    return this.http.put<Length>(this.baseUrl + 'HairLengths/'+ length.id, length);  
  }  
  
  deleteLengthById(id: string): Observable<number> {  
     
    return this.http.delete<number>(this.baseUrl + 'HairLengths/' + id);  
  }

//denisty cruds
getAllDensity(): Observable<Density[]> {  
  return this.http.get<Density[]>(this.baseUrl + 'HairDensities');  
}  

getDensityById(id: string): Observable<Density> {  
  
  return this.http.get<Density>(this.baseUrl + 'HairDensities/' + id);  
}  

createDensity(density: Density): Observable<Density> {  
   
  return this.http.post<Density>(this.baseUrl + 'HairDensities', density);  
}  

updateDensity(density: Density): Observable<Density> {  
   
  return this.http.put<Density>(this.baseUrl + 'HairDensities/'+ density.id, density);  
}  

deleteDensityById(id: string): Observable<number> {  
   
  return this.http.delete<number>(this.baseUrl + 'HairDensities/' + id);  
}


  //products cruds
  getAllProduct(): Observable<Product[]> {  
    return this.http.get<Product[]>(this.baseUrl + 'Products');  
  }  

  getProductById(ID: string): Observable<Product> {  
    return this.http.get<Product>(this.baseUrl + 'Products/' + ID);  
  }  
 
  createProduct(product: Product): Observable<Product> {  
     
    return this.http.post<Product>(this.baseUrl + 'Products', product);  
  }  

  updateProduct(product: Product): Observable<Product> {  
     
    return this.http.put<Product>(this.baseUrl + 'Products/'+ product.ID, product);  
  }  
  
  deleteProductById(ID: string): Observable<number> {  
     
    return this.http.delete<number>(this.baseUrl + 'Products/' + ID);  
  }   
  
  
      //inventoryitems cruds
  getAllInventoryItem(): Observable<InventoryItem[]> {  
    return this.http.get<InventoryItem[]>(this.baseUrl + 'InventoryItems');  
  }  

  getInventoryItemById(id: string): Observable<InventoryItem> {  
    return this.http.get<InventoryItem>(this.baseUrl + 'InventoryItems/' + id);  
  }  
 
  createInventoryItem(inventoryitem: InventoryItem): Observable<InventoryItem> {  
     
    return this.http.post<InventoryItem>(this.baseUrl + 'InventoryItems', inventoryitem);  
  }  

  updateInventoryItem(inventoryitem: InventoryItem): Observable<InventoryItem> {  
     
    return this.http.put<InventoryItem>(this.baseUrl + 'InventoryItems/'+ inventoryitem.id, inventoryitem);  
  }  
  
  deleteInventoryItemById(id: string): Observable<number> {  
     
    return this.http.delete<number>(this.baseUrl + 'InventoryItems/' + id);  
  }  


      //Blogs cruds
  getAllBlog(): Observable<Blog[]> {  
    return this.http.get<Blog[]>(this.baseUrl + 'BlogEntries');  
  }  

  getBlogById(id: string): Observable<Blog> {  
    
    return this.http.get<Blog>(this.baseUrl + 'BlogEntries/' + id);  
  }  
 
  createBlog(blog: Blog): Observable<Blog> {  
     
    return this.http.post<Blog>(this.baseUrl + 'BlogEntries', blog);  
  }  

  updateBlog(blog: Blog): Observable<Blog> {  
     
    return this.http.put<Blog>(this.baseUrl + 'BlogEntries/'+ blog.id, blog);  
  }  
  
  deleteBlogById(id: string): Observable<number> {  
     
    return this.http.delete<number>(this.baseUrl + 'BlogEntries/' + id);  
  } 


      //Countrys cruds
  getAllCountry(): Observable<Country[]> {  
    return this.http.get<Country[]>(this.baseUrl + 'Countries');  
  }  

  getCountryById(ID: string): Observable<Country> {  
    return this.http.get<Country>(this.baseUrl + 'Countries/' + ID);  
  }  
 
  createCountry(country: Country): Observable<Country> {  
     
    return this.http.post<Country>(this.baseUrl + 'Countries', country);  
  }  

  updateCountry(country: Country): Observable<Country> {  
     
    return this.http.put<Country>(this.baseUrl + 'Countries/'+ country.countryId, country);  
  }  
  
  deleteCountryById(ID: string): Observable<number> {  
     
    return this.http.delete<number>(this.baseUrl + 'Countries/' + ID);  
  }  

  
      //Citys cruds
  getAllCity(): Observable<City[]> {  
    return this.http.get<City[]>(this.baseUrl + 'Cities');  
  }  

  getCityById(ID: string): Observable<City> {  
    
    return this.http.get<City>(this.baseUrl + 'Cities/' + ID);  
  }  
 
  createCity(city: City): Observable<City> {  
     
    return this.http.post<City>(this.baseUrl + 'Cities', city);  
  }  

  updateCity(city: City): Observable<City> {  
     
    return this.http.put<City>(this.baseUrl + 'Cities/'+ city.cityId, city);  
  }  
  
  deleteCityById(ID: string): Observable<number> {  
     
    return this.http.delete<number>(this.baseUrl + 'Cities/' + ID);  
  }  


  //Suburbs cruds
  getAllSuburb(): Observable<Suburb[]> {  
    return this.http.get<Suburb[]>(this.baseUrl + 'Subhurbs');  
  }  

  getSuburbById(ID: string): Observable<Suburb> {  
     
    return this.http.get<Suburb>(this.baseUrl + 'Subhurbs/' + ID);  
  }  
 
  createSuburb(suburb: Suburb): Observable<Suburb> {  
     
    return this.http.post<Suburb>(this.baseUrl + 'Subhurbs', suburb);  
  }  

  updateSuburb(suburb: Suburb): Observable<Suburb> {  
     
    return this.http.put<Suburb>(this.baseUrl + 'Subhurbs/'+ suburb.subhurbId, suburb);  
  }  
  
  deleteSuburbById(ID: string): Observable<number> {  
     
    return this.http.delete<number>(this.baseUrl + 'Subhurbs/' + ID);  
  }  



      //Provinces cruds
  getAllProvince(): Observable<Province[]> {  
    return this.http.get<Province[]>(this.baseUrl + 'Provinces');  
  }  

  getProvinceById(ID: string): Observable<Province> {  
     
    return this.http.get<Province>(this.baseUrl + 'Provinces/' + ID);  
  }  
 
  createProvince(province: Province): Observable<Province> {  
     
    return this.http.post<Province>(this.baseUrl + 'Provinces', province);  
  }  

  updateProvince(province: Province): Observable<Province> {  
     
    return this.http.put<Province>(this.baseUrl + 'Provinces/'+ province.provinceId, province);  
  }  
  
  deleteProvinceById(ID: string): Observable<number> {  
     
    return this.http.delete<number>(this.baseUrl + 'Provinces/' + ID);  
  }  


          //Product Type cruds
  getAllProType(): Observable<ProductType[]> {  
   return this.http.get<ProductType[]>(this.baseUrl + 'ProductTypes');  
  }  

  getProTypeById(ID: string): Observable<ProductType> {  
     
    return this.http.get<ProductType>(this.baseUrl + 'ProductTypes/' + ID);  
  } 
        
         
  createProTypes(protype: ProductType): Observable<ProductType> {  
    
   return this.http.post<ProductType>(this.baseUrl + 'ProductTypes', protype);  
  }  
        
  updateProType(protype: ProductType): Observable<ProductType> {  
     
    return this.http.put<ProductType>(this.baseUrl + 'ProductTypes/'+ protype.typeID, protype);  
  }  
          
  deleteProTypeById(ID: string): Observable<number> {  
     
    return this.http.delete<number>(this.baseUrl + 'ProductTypes/' + ID);  
  } 


              //Inventory Type cruds
  getAllInvType(): Observable<InventoryType[]> {  
   return this.http.get<InventoryType[]>(this.baseUrl + 'InventoryTypes');  
  }  
        
  getInvTypeById(id: string): Observable<InventoryType> {  
    return this.http.get<InventoryType>(this.baseUrl + 'InventoryTypes/' + id);  
  }  
         
  createInvTypes(invtype: InventoryType): Observable<InventoryType> {  
    
   return this.http.post<InventoryType>(this.baseUrl + 'InventoryTypes', invtype);  
  }  
        
  updateInvType(invtype: InventoryType): Observable<InventoryType> {  
     
    return this.http.put<InventoryType>(this.baseUrl + 'InventoryTypes/'+ invtype.typeID, invtype);  
  }  
          
  deleteInvTypeById(id: string): Observable<number> {  
     
    return this.http.delete<number>(this.baseUrl + 'InventoryTypes/' + id);  
  } 


                  // Package cruds
  getAllPackage(): Observable<Package[]> {  
   return this.http.get<Package[]>(this.baseUrl + 'package');  
  }  
        
  getPackageById(ID: string): Observable<Package> {  
    return this.http.get<Package>(this.baseUrl + 'package/' + ID);  
  }  
         
  createPackage(pack: Package): Observable<Package> {  
    
   return this.http.post<Package>(this.baseUrl + 'package', pack);  
  }  
        
  updatePackage(pack: Package): Observable<Package> {  
     
    return this.http.put<Package>(this.baseUrl + 'package/'+ pack.ID, pack);  
  }  
          
  deletePackageById(ID: string): Observable<number> {  
     
    return this.http.delete<number>(this.baseUrl + 'package/' + ID);  
  } 
}
 