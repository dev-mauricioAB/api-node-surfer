import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiBaseMockService {
  private mockConfigurations: any[] = [];

  getForecasts(): Observable<any[]> {
    return of(this.mockConfigurations)
      .pipe(delay(1000));
  }
}
