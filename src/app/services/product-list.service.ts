import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor(private http: HttpClient) { }
  getProducts(){
    return this.http.get<any[]>('https://fakestoreapi.com/products');
  }
  getProductById(id: number){
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }
}
