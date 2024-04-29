import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { registerComponent } from './components/register/register.component';
import { loginComponent } from './components/login/login.component';


const routes: Routes = [
{path:'home',component:HomeComponent},
{path:'product',component:ProductsComponent},
{path:'checkout',component:CheckoutComponent},
{path:'register',component:registerComponent},
{path:'login',component:loginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
