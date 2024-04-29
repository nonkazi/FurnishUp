import { Component, NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';


const routes: Routes = [
{path:'',component: HomeComponent},
{path:'home',component: HomeComponent},
{path:'products',component:ProductsComponent},
{path:'cart',component:CartComponent},
{path:'checkout',component:CheckoutComponent},
{path: 'products/:productId', component: ProductDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
