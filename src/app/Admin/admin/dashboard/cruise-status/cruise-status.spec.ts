import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CruiseStatusComponent } from './cruise-status';

describe('CruiseStatusComponent', () => {
  let component: CruiseStatusComponent;
  let fixture: ComponentFixture<CruiseStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CruiseStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CruiseStatusComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
