import { Component, OnInit } from '@angular/core';
import { CartService } from '../Services/cart.service';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  cartdetails:any = {};
  cartdata:any = [];
  grandtotal:number = 0;
  constructor(private cartService:CartService, private productService:ProductService) {
    this.cartService.getProductsByUserId().subscribe(res=>{
      this.cartdetails = res;
      for(let item of this.cartdetails.productid){
        this.productService.getProductById(item).subscribe(resp=>{
          this.grandtotal+= parseInt(resp["price"]);
          this.cartdata.push(resp);
        })
      }
    })
   }

  ngOnInit(): void {
  }

}
