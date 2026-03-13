import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveOffersComponent } from './active-offers';

describe('ActiveOffersComponent', () => {
  let component: ActiveOffersComponent;
  let fixture: ComponentFixture<ActiveOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveOffersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveOffersComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
