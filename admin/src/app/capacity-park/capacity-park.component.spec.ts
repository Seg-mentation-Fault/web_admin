import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacityParkComponent } from './capacity-park.component';

describe('CapacityParkComponent', () => {
  let component: CapacityParkComponent;
  let fixture: ComponentFixture<CapacityParkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapacityParkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapacityParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
