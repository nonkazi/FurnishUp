import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FurnitureProducts } from '../interface/products';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {



  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient){}

  getProductById(id: number = 1){
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }

  getProducts(){
    return this.http.get<any[]>('https://fakestoreapi.com/products');
  }

  addProduct(productData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, productData);
  }

  removeProduct(productId: number): Observable<any>{
    return this.http.delete<any>(`https://fakestoreapi.com/products/${productId}`);
  }
  
}
