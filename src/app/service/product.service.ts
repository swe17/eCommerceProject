import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productUrl = './assets/data.json';


  constructor(private http: HttpClient) { }
  getAPI() {
    return this.http.get(this.productUrl)
    
  }

}









 