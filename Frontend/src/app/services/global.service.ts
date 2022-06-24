import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http:HttpClient) {
  }
  getData(){
    return this.http.get('https://jsonplaceholder.typicode.com/photos?_limit=2500');
  }
}
