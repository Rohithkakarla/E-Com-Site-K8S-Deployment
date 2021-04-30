import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SitemainComponent } from './sitemain/sitemain.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AuthguardGuard } from './Services/authguard.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home' ,                  component: HomeComponent },
  { path: 'login' ,                 component: LoginComponent },
  { path: 'signup' ,                component: SignupComponent },
  { path: 'main',                   component:  SitemainComponent,  canActivate: [AuthguardGuard]},
  { path: 'category/:categoryid' ,  component: CategoryComponent ,  canActivate: [AuthguardGuard]},
  { path: 'category' ,              component: CategoryComponent ,  canActivate: [AuthguardGuard]},
  { path: 'product/:productid' ,    component: ProductComponent,    canActivate: [AuthguardGuard]},
  { path: 'product' ,               component: ProductComponent,    canActivate: [AuthguardGuard]},
  { path: 'cart' ,                  component: CartComponent,       canActivate: [AuthguardGuard]},
  { path: 'orders' ,                component: OrdersComponent,     canActivate: [AuthguardGuard]},
  { path: 'wishlist' ,              component: WishlistComponent,   canActivate: [AuthguardGuard]},
  { path: '**', redirectTo: '/main'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
