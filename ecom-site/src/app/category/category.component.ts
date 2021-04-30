import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../Services/category.service';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoryid:any;
  products:any = [];
  categoryname: any;
  constructor(private router: ActivatedRoute,public route:Router, private categoryService: CategoryService, private productService: ProductService) {
    this.route.routeReuseStrategy.shouldReuseRoute = () => false;
   }

  ngOnInit(): void {
    this.router.paramMap.subscribe(params =>{
      this.categoryid = params.get('categoryid');
    });
    console.log(this.categoryid);
    this.categoryService.getCategoryNameById(this.categoryid).subscribe(resp=>{
      let response:any = resp;
      this.categoryname = response.name;
    });
    this.productService.getallProductsByCategoryId(this.categoryid).subscribe(res=>{
      this.products = res;
      console.log(res);
    })
  }

}
