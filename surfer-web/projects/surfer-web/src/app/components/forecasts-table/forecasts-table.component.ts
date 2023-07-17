import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { DatePipe } from '@angular/common';
import { ApiBaseService } from '../../services/api-base.service';

import { GetForecastsResponseModel } from '../../models/api-responses.model';
import { AuthService } from '../../services/auth.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-forecasts-table',
  templateUrl: './forecasts-table.component.html',
  styleUrls: ['./forecasts-table.component.scss'],
})
export class ForecastsTableComponent implements OnInit {
  displayedColumns: string[] = [
    'name', 'rating', 'swellDirection', 'swellHeight', 'waveDirection', 'time',
  ];

  dataSource = new MatTableDataSource<GetForecastsResponseModel>();

  token!: string;

  constructor(
    private apiBase: ApiBaseService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.token = this.authService.getToken();

    this.apiBase.getForecasts(this.token)
      .subscribe((data) => {
        this.dataSource.data = data;
      });
  }

  getFormattedDate(date: string) {
    return new DatePipe('en-US').transform(date, 'dd/MM/YYYY | hh:mm:ss');
  }
}
