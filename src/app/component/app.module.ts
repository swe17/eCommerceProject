import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from '../approuting/approuting.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http'; 
import { ProductService } from '../service/product.service';
import { AdminComponent } from './admin/admin.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ProductDetailedViewComponent } from './product-detailed-view/product-detailed-view.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,

    ProductComponent,
    NavBarComponent,
    AdminComponent,
    MainContentComponent,
    ProductDetailedViewComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
   
  
  ],
  providers: [ProductService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
