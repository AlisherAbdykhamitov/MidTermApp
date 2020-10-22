import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient, private router: Router) {}
  logged = false;
  signup(polzo: User) {
    return this.http.post<User>(`http://localhost:3000/users`, polzo);
  }

  login(username: string, password: string) {
    console.log(username, password);
    return this.http.post<User>(`http://localhost:3000/sign-in`, { username, password });
  }
  logout(): void {
    localStorage.removeItem('token');
  }
}
