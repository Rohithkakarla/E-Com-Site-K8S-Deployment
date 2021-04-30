import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CategoryService } from '../Services/category.service';
import { ProductService } from '../Services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sitemain',
  templateUrl: './sitemain.component.html',
  styleUrls: ['./sitemain.component.css']
})
export class SitemainComponent implements OnInit {

  /*[
    {
      "name":"Vegetables",
      "products":[{

      }]
    },
    {

    }
  ]*/

  categories : any = [];
  categorytoproduct:any=[];
  constructor(public router:Router,private categoryService:CategoryService, private productService:ProductService) {
      categoryService.getallCategories().subscribe(res =>{
        this.categories = res;
        console.log(res);
        for(let item of this.categories){
          productService.getallProductsByCategoryId(item.id).subscribe(resp=>{
            this.categorytoproduct.push({
              "categoryname":item.name,
              "products":resp
            });
          })
          
        }
        console.log(this.categorytoproduct);
      })
   }

  ngOnInit(): void {
  }

}
