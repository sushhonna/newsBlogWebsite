import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  base_url: string = 'http://localhost:3000';

  postUserData(data: any) {
    return this.http.post(`${this.base_url}/user`, data);
  }

  getAllUserData() {
    return this.http.get(`${this.base_url}/user`);
  }

  postNewsBlogData(data: any) {
    return this.http.post(`${this.base_url}/newsBlog`, data);
  }
  
  getNewsBlogData() {
    return this.http.get(`${this.base_url}/newsBlog`);
  }

}
