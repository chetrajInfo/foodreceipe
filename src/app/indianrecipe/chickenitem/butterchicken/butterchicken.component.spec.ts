import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButterchickenComponent } from './butterchicken.component';

describe('ButterchickenComponent', () => {
  let component: ButterchickenComponent;
  let fixture: ComponentFixture<ButterchickenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButterchickenComponent]
    });
    fixture = TestBed.createComponent(ButterchickenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
