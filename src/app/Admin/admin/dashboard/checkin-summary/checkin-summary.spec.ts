import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckinSummaryComponent } from './checkin-summary';

describe('CheckinSummaryComponent', () => {
  let component: CheckinSummaryComponent;
  let fixture: ComponentFixture<CheckinSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckinSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckinSummaryComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
