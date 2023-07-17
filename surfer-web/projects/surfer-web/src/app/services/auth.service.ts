import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, map } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

import { EnvironmentService } from './environment.service';
import { AuthenticateResponseModel, RegisterResponseModel } from '../models/auth-api-responses.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl!: string;
  private token!: string;

  constructor(
    private http: HttpClient,
    private environment: EnvironmentService,
    private cookieService: CookieService
  ) {
    this.apiUrl = this.environment.getEnvironment().apiBaseUrl;
  }

  login(email: string, password: string) {
    const url = `${this.apiUrl}/users/authenticate`;
    const payload = { email, password };

    return this.http.post<AuthenticateResponseModel>(url, payload).pipe(
      map((res) => {
        this.token = res.token;

        this.saveToken(this.token);

        return res;
      })
    )
  }

  saveToken(token: string): void {
    this.cookieService.set('AuthToken', token, 1, '/');
  }

  getToken(): string {
    return this.cookieService.get('AuthToken');
  }

  register(name: string, email: string, password: string): Observable<RegisterResponseModel> {
    const url = `${this.apiUrl}/users`;
    const payload = { name, email, password };

    return this.http.post<RegisterResponseModel>(url, payload);
  }

  isAuthenticated(): boolean {
    if (!this.checkIfTokenExist())
      return false;

    if (!this.token)
      this.token = this.getToken();

    return this.isJWTTokenValid(this.token);

  }

  checkIfTokenExist(): boolean {
    return this.cookieService.check('token');
  }

  isJWTTokenValid(token: string): boolean {
    const parts = token.split('.');

    if (parts.length !== 3) {
      return false;
    }

    try {
      const payload = JSON.parse(atob(parts[1]));
      const expired = payload.exp * 1000;

      const now = Date.now();

      if (now > expired) {
        return false;
      }

      return true;
    } catch (error) {
      return false;
    }
  }
}
