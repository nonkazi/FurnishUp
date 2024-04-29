import { Component, NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
<<<<<<< HEAD
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
=======
import { CartComponent } from './components/cart/cart.component';


const routes: Routes = [{path:'home',component:HomeComponent},
{path:'product',component:ProductsComponent},
{path:'cart',component:CartComponent}
];
>>>>>>> c8863e74f38ffd3e7b33dbdbaad12e2a2e7533fd

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
