import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeachListComponent } from './beach-list.component';

describe('BeachListComponent', () => {
  let component: BeachListComponent;
  let fixture: ComponentFixture<BeachListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeachListComponent]
    });
    fixture = TestBed.createComponent(BeachListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
