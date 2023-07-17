import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { EnvironmentService } from './environment.service';

import { GetForecastsResponseModel } from '../models/api-responses.model';

@Injectable({
  providedIn: 'root',
})
export class ApiBaseService {
  private apiBaseUrl: string;

  constructor(
    private http: HttpClient,
    private environment: EnvironmentService,
  ) {
    this.apiBaseUrl = this.environment.getEnvironment().apiBaseUrl;
  }

  getForecasts(token: string): Observable<GetForecastsResponseModel[]> {
    return this.http.get<GetForecastsResponseModel[]>(`${this.apiBaseUrl}/forecast`, {
      headers: {
        // eslint-disable-next-line max-len
        'x-access-token': `${token}`,
      },
    });
  }
}
