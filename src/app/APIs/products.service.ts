import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { products } from '../interface/products';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products : any[] =[]

  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient){}

  
  postProduct(productData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, productData);
  }

  removeProduct(productId: number){
    return this.http.delete<any>(`https://fakestoreapi.com/products/${productId}`);

  }
  
}
