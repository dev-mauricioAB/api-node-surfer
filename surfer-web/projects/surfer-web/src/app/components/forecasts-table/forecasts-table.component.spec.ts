import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastsTableComponent } from './forecasts-table.component';

describe('ForecastsTableComponent', () => {
  let component: ForecastsTableComponent;
  let fixture: ComponentFixture<ForecastsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForecastsTableComponent]
    });
    fixture = TestBed.createComponent(ForecastsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
