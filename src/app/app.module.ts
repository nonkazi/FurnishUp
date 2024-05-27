import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { registerComponent } from './components/register/register.component';
import { SucessComponent } from './components/sucess/sucess.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component'
import {  HttpClientModule } from '@angular/common/http';
import { CheckoutService } from './services/checkout/checkout.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { loginComponent } from './components/login/login.component';
import { httpInterceptorProviders } from './util/http.intercerptors';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [	
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    ProductDetailComponent,
    registerComponent,
    loginComponent,
    registerComponent,
    CartComponent,
    CheckoutComponent,
    registerComponent,
    SucessComponent,
      ProfileComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
   FormsModule
  ],
  providers: [CheckoutService, httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
