import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCapacityDayComponent } from './create-capacity-day.component';

describe('CreateCapacityDayComponent', () => {
  let component: CreateCapacityDayComponent;
  let fixture: ComponentFixture<CreateCapacityDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCapacityDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCapacityDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
