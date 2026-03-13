import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cruises } from './cruises';

describe('Cruises', () => {
  let component: Cruises;
  let fixture: ComponentFixture<Cruises>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cruises]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cruises);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
