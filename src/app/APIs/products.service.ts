import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient){}

  
  addProduct(productData: any) {
    return this.http.post<any>(this.apiUrl, productData);
  }
  
}
