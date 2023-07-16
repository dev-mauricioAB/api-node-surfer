import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeachFormComponent } from './beach-form.component';

describe('BeachFormComponent', () => {
  let component: BeachFormComponent;
  let fixture: ComponentFixture<BeachFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeachFormComponent]
    });
    fixture = TestBed.createComponent(BeachFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
