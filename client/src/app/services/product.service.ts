import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  obtainProduct(id: string) {
    throw new Error('Method not implemented.');
  }
  url= 'http://localhost:4001/api/product/';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
   return this.http.get<any[]>(this.url);
  }

  deleteProduct(id: string): Observable<any>{
    return this.http.delete(this.url + id);

  }
  createProduct(product: Product): Observable<any>{
    return this.http.post(this.url, product);

  }
  extractProduct(id: string): Observable<any>{
    return this.http.get(this.url + id);

  }
  editProduct(id: string, product: Product): Observable<any>{
    return this.http.put(this.url + id, product);

  }
}
