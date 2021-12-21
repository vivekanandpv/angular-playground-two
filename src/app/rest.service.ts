import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get('https://reqres.in/api/users');
  }

  createUser() {
    return this.http.post('https://reqres.in/api/users', {
      user: 'Vivek',
    });
  }
}
