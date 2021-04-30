import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoryurl :any =environment.baseUrl +'/category';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    }),
  }


  constructor(private http: HttpClient) {
   }

  getallCategories(){
    return this.http.get(this.categoryurl+"/getall",this.httpOptions);
  }

  getCategoryNameById(id:string){
    return this.http.get(this.categoryurl+"/getById/"+id,this.httpOptions);
  }

}
