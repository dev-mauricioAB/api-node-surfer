import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { GetForecastsResponseModel } from '../models/api-responses.model';

@Injectable({
  providedIn: 'root',
})
export class ApiBaseMockService {
  private mockConfigurations: GetForecastsResponseModel[] = [];

  getForecasts(): Observable<GetForecastsResponseModel[]> {
    return of(this.mockConfigurations)
      .pipe(delay(1000));
  }
}
