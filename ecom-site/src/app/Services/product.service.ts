import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  producturl :any =environment.baseUrl +'/product';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    }),
  }


  constructor(private http: HttpClient) {
   }

  getallProductsByCategoryId(id:string){
    return this.http.get(this.producturl+"/getProductsByCategoryId/"+id,this.httpOptions);
  }

  getProductById(id:string){
    return this.http.get(this.producturl+"/getProductById/"+id,this.httpOptions);
  }
}
