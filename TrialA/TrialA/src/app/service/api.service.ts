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




@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http: HttpClient) { }
  
/*   postFile(caption: string, fileToUpload: File) {
    const endpoint = 'http://localhost:28101/api/UploadImage';
    const formData: FormData = new FormData();
    formData.append('Image', fileToUpload, fileToUpload.name);
    formData.append('ImageCaption', caption);
    return this.http
      .post(endpoint, formData);
  } */



 //User
 createUser(user: User): Observable<User> {  
  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
  return this.http.post<User>('https://localhost:44372/Api/user/create', user, httpOptions);  
}

login(user: User): Observable<User> {
  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
  return this.http.post<User>('https://localhost:44372/Api/user/login', user, httpOptions); 
}

//REPORTS
//Inventory 
inventoryReport()
{
  return this.http.get("https://localhost:44372/api/inventory/report")
  .pipe(map(result => result));
} 

//customer
customerReport(selection : number)
{
  return this.http.get<any[]>("https://localhost:44372/api/customer/report?CustomerSelection="+ selection)
  .pipe(map(result => result));
} 

//Inventory 
deliveryReport()
{
  return this.http.get("https://localhost:44372/api/delivery/report")
  .pipe(map(result => result));
} 

//Product 
productReport()
{
  return this.http.get("https://localhost:44372/api/product/report")
  .pipe(map(result => result));
} 


 







  //CRUDS
  //condition cruds
  getAllCondition(): Observable<Condition[]> {  
    return this.http.get<Condition[]>('https://localhost:44372/Api/Condition/read');  
  }  

  getConditionById(ID: string): Observable<Condition> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.get<Condition>('https://localhost:44372/Api/Condition/getById?id=' + ID, httpOptions);  
  }  
 
  createCondition(condition: Condition): Observable<Condition> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<Condition>('https://localhost:44372/Api/Condition/create', condition, httpOptions);  
  }  
 
   updateCondition(condition: Condition){  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put('https://localhost:44372/Api/Condition/update/?id='+ condition.ID, condition, httpOptions);  
  }   

  deleteConditionById(ID: string): Observable<number> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete<number>('https://localhost:44372/Api/Condition/delete?id=' + ID, httpOptions);  
  } 











        //Tutorials cruds
  getAllTutorial(): Observable<Tutorials[]> {  
    return this.http.get<Tutorials[]>('https://localhost:44372/Api/tutorial/read');  
  }  

  getTutorialById(ID: string): Observable<Tutorials> {  
    return this.http.get<Tutorials>('https://localhost:44372/Api/tutorial/getById?id=' + ID);  
  }  
 
  createTutorial(tutorials: Tutorials): Observable<Tutorials> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<Tutorials>('https://localhost:44372/Api/tutorial/create', tutorials, httpOptions);  
  }  
 
   updateTutorial(tutorials: Tutorials){  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put('https://localhost:44372/Api/tutorial/update/?id='+ tutorials.ID, tutorials, httpOptions);  
  }   

  deleteTutorialById(ID: string): Observable<number> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete<number>('https://localhost:44372/Api/tutorial/delete?id=' + ID, httpOptions);  
  }

    //length cruds
    getAllLength(): Observable<Length[]> {  
      return this.http.get<Length[]>('https://localhost:44372/Api/length/read');  
    }  
  
    getLengthById(ID: string): Observable<Length> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) }; 
      return this.http.get<Length>('https://localhost:44372/Api/length/getById?id=' + ID, httpOptions);  
    }  
   
    createLength(length: Length): Observable<Length> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };   
      return this.http.post<Length>('https://localhost:44372/Api/length/create', length, httpOptions);  
    }  
  
    updateLength(length: Length): Observable<Length> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.put<Length>('https://localhost:44372/Api/length/update/?id='+ length.ID, length, httpOptions);  
    }  
    
    deleteLengthById(ID: string): Observable<number> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.delete<number>('https://localhost:44372/Api/length/delete?id=' + ID, httpOptions);  
    }

  //denisty cruds
  getAllDensity(): Observable<Density[]> {  
    return this.http.get<Density[]>('https://localhost:44372/Api/density/read');  
  }  

  getDensityById(ID: string): Observable<Density> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) }; 
    return this.http.get<Density>('https://localhost:44372/Api/density/getById?id=' + ID, httpOptions);  
  }  
 
  createDensity(density: Density): Observable<Density> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<Density>('https://localhost:44372/Api/density/create', density, httpOptions);  
  }  

  updateDensity(density: Density): Observable<Density> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put<Density>('https://localhost:44372/Api/density/update/?id='+ density.ID, density, httpOptions);  
  }  
  
  deleteDensityById(ID: string): Observable<number> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete<number>('https://localhost:44372/Api/density/delete?id=' + ID, httpOptions);  
  }


    //user cruds
/*     getAllUser(): Observable<User[]> {  
      return this.http.get<User[]>('https://localhost:44372/Api/user/read');  
    }  
  
    getUserById(ID: number): Observable<User> {  
      return this.http.get<User>('https://localhost:44372/Api/user/getById?id=' + ID);  
    }  
   
    createUser(user: User): Observable<User> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.post<User>('https://localhost:44372/Api/user/create', user, httpOptions);  
    }  
  
    updateUser(user: User): Observable<User> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.put<User>('https://localhost:44372/Api/userupdate/?id='+ , user, httpOptions);  
    }  
    
    deleteUserById(ID: number): Observable<number> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.delete<number>('https://localhost:44372/Api/user/delete?id=' + ID, httpOptions);  
    } */


    //products cruds
    getAllProduct(): Observable<Product[]> {  
      return this.http.get<Product[]>('https://localhost:44372/Api/product/read');  
    }  
  
    getProductById(ID: string): Observable<Product> {  
      return this.http.get<Product>('https://localhost:44372/Api/product/getById?id=' + ID);  
    }  
   
    createProduct(product: Product): Observable<Product> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.post<Product>('https://localhost:44372/Api/product/create', product, httpOptions);  
    }  
  
    updateProduct(product: Product): Observable<Product> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.put<Product>('https://localhost:44372/Api/product/update/?id='+ product.ID, product, httpOptions);  
    }  
    
    deleteProductById(ID: string): Observable<number> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.delete<number>('https://localhost:44372/Api/product/delete?id=' + ID, httpOptions);  
    }   
    
    
        //inventoryitems cruds
    getAllInventoryItem(): Observable<InventoryItem[]> {  
      return this.http.get<InventoryItem[]>('https://localhost:44372/Api/inventoryItem/read');  
    }  
  
    getInventoryItemById(ID: string): Observable<InventoryItem> {  
      return this.http.get<InventoryItem>('https://localhost:44372/Api/inventoryItem/getById?id=' + ID);  
    }  
   
    createInventoryItem(inventoryitem: InventoryItem): Observable<InventoryItem> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.post<InventoryItem>('https://localhost:44372/Api/inventoryItem/create', inventoryitem, httpOptions);  
    }  
  
    updateInventoryItem(inventoryitem: InventoryItem): Observable<InventoryItem> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.put<InventoryItem>('https://localhost:44372/Api/inventoryItem/update/?id='+ inventoryitem.ID, inventoryitem, httpOptions);  
    }  
    
    deleteInventoryItemById(ID: string): Observable<number> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.delete<number>('https://localhost:44372/Api/inventoryItem/delete?id=' + ID, httpOptions);  
    }  


        //Blogs cruds
    getAllBlog(): Observable<Blog[]> {  
      return this.http.get<Blog[]>('https://localhost:44372/Api/blog/read');  
    }  
  
    getBlogById(ID: string): Observable<Blog> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) }; 
      return this.http.get<Blog>('https://localhost:44372/Api/blog/getById?id=' + ID);  
    }  
   
    createBlog(blog: Blog): Observable<Blog> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.post<Blog>('https://localhost:44372/Api/blog/create', blog, httpOptions);  
    }  
  
    updateBlog(blog: Blog): Observable<Blog> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.put<Blog>('https://localhost:44372/Api/blog/update?id='+ blog.ID, blog, httpOptions);  
    }  
    
    deleteBlogById(ID: string): Observable<number> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.delete<number>('https://localhost:44372/Api/blog/delete?id=' + ID, httpOptions);  
    } 


        //Allergens cruds
    getAllAllergen(): Observable<Allergen[]> {  
      return this.http.get<Allergen[]>('https://localhost:44372/Api/allergen/read');  
    }  
  
    getAllergenById(ID: string): Observable<Allergen> { 
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) }; 
      return this.http.get<Allergen>('https://localhost:44372/Api/allergen/getById?id=' + ID, httpOptions);  
    }  
   
    createAllergen(allergen: Allergen): Observable<Allergen> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.post<Allergen>('https://localhost:44372/Api/allergen/create', allergen, httpOptions);  
    }  
  
    updateAllergen(allergen: Allergen): Observable<Allergen> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.put<Allergen>('https://localhost:44372/Api/allergen/update?id='+ allergen.ID, allergen, httpOptions);  
    }  
    
    deleteAllergenById(ID: string): Observable<number> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.delete<number>('https://localhost:44372/Api/allergen/delete?id=' + ID, httpOptions);  
    } 


        //Countrys cruds
    getAllCountry(): Observable<Country[]> {  
      return this.http.get<Country[]>('https://localhost:44372/Api/country/read');  
    }  
  
    getCountryById(ID: string): Observable<Country> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) }; 
      return this.http.get<Country>('https://localhost:44372/Api/country/getById?id=' + ID, httpOptions);  
    }  
   
    createCountry(country: Country): Observable<Country> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.post<Country>('https://localhost:44372/Api/country/create', country, httpOptions);  
    }  
  
    updateCountry(country: Country): Observable<Country> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.put<Country>('https://localhost:44372/Api/country/update?id='+ country.CountryID, country, httpOptions);  
    }  
    
    deleteCountryById(ID: string): Observable<number> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.delete<number>('https://localhost:44372/Api/country/delete?id=' + ID, httpOptions);  
    }  
 
    
        //Citys cruds
    getAllCity(): Observable<City[]> {  
      return this.http.get<City[]>('https://localhost:44372/Api/city/read');  
    }  
  
    getCityById(ID: string): Observable<City> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) }; 
      return this.http.get<City>('https://localhost:44372/Api/city/getById?id=' + ID, httpOptions);  
    }  
   
    createCity(city: City): Observable<City> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.post<City>('https://localhost:44372/Api/city/create', city, httpOptions);  
    }  
  
    updateCity(city: City): Observable<City> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.put<City>('https://localhost:44372/Api/city/update/?id='+ city.CityID, city, httpOptions);  
    }  
    
    deleteCityById(ID: string): Observable<number> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.delete<number>('https://localhost:44372/Api/city/delete?id=' + ID, httpOptions);  
    }  


    //Suburbs cruds
    getAllSuburb(): Observable<Suburb[]> {  
      return this.http.get<Suburb[]>('https://localhost:44372/Api/suburb/read');  
    }  
  
    getSuburbById(ID: string): Observable<Suburb> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.get<Suburb>('https://localhost:44372/Api/suburb/getById?id=' + ID, httpOptions);  
    }  
   
    createSuburb(suburb: Suburb): Observable<Suburb> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.post<Suburb>('https://localhost:44372/Api/suburb/create', suburb, httpOptions);  
    }  
  
    updateSuburb(suburb: Suburb): Observable<Suburb> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.put<Suburb>('https://localhost:44372/Api/suburb/update/?id='+ suburb.SuburbID, suburb, httpOptions);  
    }  
    
    deleteSuburbById(ID: string): Observable<number> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.delete<number>('https://localhost:44372/Api/suburb/delete?id=' + ID, httpOptions);  
    }  



        //Provinces cruds
    getAllProvince(): Observable<Province[]> {  
      return this.http.get<Province[]>('https://localhost:44372/Api/province/read');  
    }  
  
    getProvinceById(ID: string): Observable<Province> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.get<Province>('https://localhost:44372/Api/province/getById?id=' + ID, httpOptions);  
    }  
   
    createProvince(province: Province): Observable<Province> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.post<Province>('https://localhost:44372/Api/province/create', province, httpOptions);  
    }  
  
    updateProvince(province: Province): Observable<Province> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.put<Province>('https://localhost:44372/Api/province/update/?id='+ province.ProvinceID, province, httpOptions);  
    }  
    
    deleteProvinceById(ID: string): Observable<number> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.delete<number>('https://localhost:44372/Api/province/delete?id=' + ID, httpOptions);  
    }  

  
            //Addresss cruds
    getAllAddress(): Observable<Address[]> {  
     return this.http.get<Address[]>('https://localhost:44372/Api/address/read');  
    }  
          
    getAddressById(ID: number): Observable<Address> {  
      return this.http.get<Address>('https://localhost:44372/Api/address/getById?id=' + ID);  
    }  
           
    createAddress(address: Address): Observable<Address> {  
     const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
     return this.http.post<Address>('https://localhost:44372/Api/address/create', address, httpOptions);  
    }  
          
    updateAddress(address: Address): Observable<Address> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.put<Address>('https://localhost:44372/Api/address/update/?id='+ address.ID, address, httpOptions);  
    }  
            
    deleteAddressById(ID: number): Observable<number> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.delete<number>('https://localhost:44372/Api/address/delete?id=' + ID, httpOptions);  
    } 


            //Product Type cruds
    getAllProType(): Observable<ProductType[]> {  
     return this.http.get<ProductType[]>('https://localhost:44372/Api/productType/read');  
    }  

    getProTypeById(ID: string): Observable<ProductType> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.get<ProductType>('https://localhost:44372/Api/productType/getById?id=' + ID, httpOptions);  
    } 
          
           
    createProTypes(protype: ProductType): Observable<ProductType> {  
     const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
     return this.http.post<ProductType>('https://localhost:44372/Api/productType/create', protype, httpOptions);  
    }  
          
    updateProType(protype: ProductType): Observable<ProductType> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.put<ProductType>('https://localhost:44372/Api/productType/update/?id='+ protype.TypeID, protype, httpOptions);  
    }  
            
    deleteProTypeById(ID: string): Observable<number> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.delete<number>('https://localhost:44372/Api/productType/delete?id=' + ID, httpOptions);  
    } 


                //Inventory Type cruds
    getAllInvType(): Observable<InventoryType[]> {  
     return this.http.get<InventoryType[]>('https://localhost:44372/Api/inventoryType/read');  
    }  
          
    getInvTypeById(ID: string): Observable<InventoryType> {  
      return this.http.get<InventoryType>('https://localhost:44372/Api/inventoryType/getById?id=' + ID);  
    }  
           
    createInvTypes(invtype: InventoryType): Observable<InventoryType> {  
     const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
     return this.http.post<InventoryType>('https://localhost:44372/Api/inventoryType/create', invtype, httpOptions);  
    }  
          
    updateInvType(invtype: InventoryType): Observable<InventoryType> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.put<InventoryType>('https://localhost:44372/Api/inventoryType/update/?id='+ invtype.TypeID, invtype, httpOptions);  
    }  
            
    deleteInvTypeById(ID: string): Observable<number> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.delete<number>('https://localhost:44372/Api/inventoryType/delete?id=' + ID, httpOptions);  
    } 


                    // Package cruds
    getAllPackage(): Observable<Package[]> {  
     return this.http.get<Package[]>('https://localhost:44372/Api/package/read');  
    }  
          
    getPackageById(ID: string): Observable<Package> {  
      return this.http.get<Package>('https://localhost:44372/Api/package/getById?id=' + ID);  
    }  
           
    createPackage(pack: Package): Observable<Package> {  
     const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
     return this.http.post<Package>('https://localhost:44372/Api/package/create', pack, httpOptions);  
    }  
          
    updatePackage(pack: Package): Observable<Package> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.put<Package>('https://localhost:44372/Api/package/update/?id='+ pack.ID, pack, httpOptions);  
    }  
            
    deletePackageById(ID: string): Observable<number> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.delete<number>('https://localhost:44372/Api/package/delete?id=' + ID, httpOptions);  
    } 
}
 