import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { loginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    ProductDetailComponent,
    loginComponent,
  
    CartComponent,
    CheckoutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'',component: HomeComponent},
      {path:'home',component: HomeComponent},
      {path:'products',component: ProductsComponent},
      {path:'checkout',component: CheckoutComponent},
      {path:'productdetais',component: ProductDetailComponent},
      {path:'cart',component: CartComponent},
      {path:'login',component: LoginComponent},
      {path:'register',component: RegisterComponent},


    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
