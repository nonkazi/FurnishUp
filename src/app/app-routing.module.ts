import { Component, NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { loginComponent } from './components/login/login.component';
import { registerComponent } from './components/register/register.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component'
import { RouterModule, Routes } from '@angular/router';




const routes: Routes = [{path:'home',component:HomeComponent},
{path:'home',component: HomeComponent},
{path:'products',component:ProductsComponent},
{path:'product/:id',component: ProductDetailComponent},
{path:'checkout',component:CheckoutComponent},
{path:'cart',component: CartComponent},
{path:'login',component: loginComponent},
{path:'register',component: registerComponent},
{path:'',component: HomeComponent},


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
