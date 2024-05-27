import { Component, NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { RouterModule, Routes } from '@angular/router';
import { loginComponent } from './components/login/login.component';
import { registerComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminDashboardComponent } from './components/AdminDashboard/AdminDashboard.component';
import { SupplierDashboardComponent } from './components/SupplierDashboard/SupplierDashboard.component';
import { UserDashboardComponent } from './components/UserDashboard/UserDashboard.component';

const Routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: loginComponent },
  { path: 'register', component: registerComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'supplier', component: SupplierDashboardComponent },
  { path: 'user', component: UserDashboardComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
