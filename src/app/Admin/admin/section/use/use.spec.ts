import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Use } from './use';

describe('Use', () => {
  let component: Use;
  let fixture: ComponentFixture<Use>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Use]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Use);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
