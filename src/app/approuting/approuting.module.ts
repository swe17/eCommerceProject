import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../component/login/login.component';
import { ProductComponent } from '../component/product/product.component';
import { HomeComponent } from '../component/home/home.component';
import { ProductDetailedViewComponent } from '../component/product-detailed-view/product-detailed-view.component';
import { CartComponent } from '../component/cart/cart.component';
import { NavBarComponent } from '../component/nav-bar/nav-bar.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ApproutingModule { }

const routes: Routes = [

{ path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'home', component:HomeComponent  },
  { path: 'login', component: LoginComponent },
  { path: 'product', component: ProductComponent  },
  { path: 'product/:search', component: ProductComponent  },
  { path: 'detailedView/:index', component:ProductDetailedViewComponent },
  { path: 'cart', component: CartComponent },
  { path: 'cart/:cartIndex/:quantity', component: CartComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }