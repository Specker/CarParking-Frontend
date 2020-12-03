import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingloginComponent } from './parkinglogin.component';

describe('ParkingloginComponent', () => {
  let component: ParkingloginComponent;
  let fixture: ComponentFixture<ParkingloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
