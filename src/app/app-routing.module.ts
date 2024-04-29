import { Component, NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { loginComponent} from './components/login/login.component';
import { registerComponent } from './components/register/register.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component'
import { RouterModule, Routes } from '@angular/router';




const routes: Routes = [{path:'home',component:HomeComponent},
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{path:'',component: HomeComponent},
{path:'home',component: HomeComponent},
{path:'products',component:ProductsComponent},
{path:'checkout',component:CheckoutComponent},
  {path:'productdetais',component: ProductDetailComponent},
  {path:'cart',component: CartComponent},
  {path:'login',component: loginComponent},
  {path:'register',component: registerComponent},


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
