import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getCategories() {
    return this.http.get<string[]>('https://api.publicapis.org/categories');
  }
}
