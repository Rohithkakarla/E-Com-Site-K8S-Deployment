import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartdetails:any = {};
  constructor(private http: HttpClient) {
  }

  carturl :any =environment.baseUrl +'/cart';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    }),
  }

  getProductsByUserId(){
    let userid = sessionStorage.getItem("userid");
    return this.http.get(this.carturl+"/getById/"+userid,this.httpOptions);
  }

  addProduct(id:string){
    let userid = sessionStorage.getItem("userid");
    return this.http.post(this.carturl+"/addproduct?userid="+userid+"&productid="+id,this.httpOptions);
  }
}
