import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { EnvironmentService } from './environment.service';

import { GetForecastsResponseModel } from '../models/api-responses.model';

@Injectable({
  providedIn: 'root'
})
export class ApiBaseService {
  private apiBaseUrl: string;

  constructor(
    private http: HttpClient,
    private environment: EnvironmentService,
  ) {
    this.apiBaseUrl = this.environment.getEnvironment().apiBaseUrl;
  }

  getForecasts(): Observable<GetForecastsResponseModel[]> {

    return this.http.get<GetForecastsResponseModel[]>(this.apiBaseUrl + '/forecast', {
      headers: {
        'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NGIyZTdiZDM5YmU2MWVjMGVhNjhiNzgiLCJpYXQiOjE2ODk0NDc1NjYsImV4cCI6MTY4OTQ2NzU2Nn0.ezKLubt7Lc_DO5-8UH6KnbIFjYuUJaJsZRYQQ-Eb2gE'
      }
    });
  }
}
