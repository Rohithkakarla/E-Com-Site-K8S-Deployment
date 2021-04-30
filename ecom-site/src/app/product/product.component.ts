import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from '../Services/cart.service';
import { CategoryService } from '../Services/category.service';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productid:any;
  productdetails:any={};
  categorydetails:any={};
  constructor(private router: ActivatedRoute,
    private route:Router,
    private productService:ProductService,
    private categoryService:CategoryService, 
    private cartService:CartService) { 
    this.route.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.router.paramMap.subscribe(params =>{
      this.productid = params.get('productid');
    });

    this.productService.getProductById(this.productid).subscribe(res=>{
      this.productdetails = res;
      console.log(res);
      this.categoryService.getCategoryNameById(this.productdetails.categoryid).subscribe(resp=>{
        this.categorydetails = resp;
      })

    })    
    
  }

  AddtoCart(id:string){
    console.log(id);
    this.cartService.addProduct(id).subscribe(resp=>{
      console.log(resp);
      sessionStorage.setItem("cart",resp["productid"].length);
      location.reload();
    })
  }

}
