import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../Services/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartitems:number = 0;
  categories:any = [];
  loginstatus :Boolean = false;
  constructor(public router: Router, private categoryService: CategoryService) {
      if(sessionStorage.getItem('loginstatus')!=null){
        this.loginstatus = true;
      }
      this.categoryService.getallCategories().subscribe(resp=>{
        this.categories = resp;
        console.log(resp);
      })
   }

   logOut(){
     sessionStorage.clear();
     this.router.navigate(['/home'])
            .then(() => {
              window.location.reload();
            });
   }

  ngOnInit(): void {
    if(sessionStorage.getItem("cart")!=null){
      this.cartitems = parseInt(sessionStorage.getItem("cart"));
    }
  }

}
