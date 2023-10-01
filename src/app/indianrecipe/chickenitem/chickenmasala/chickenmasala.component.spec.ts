import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChickenmasalaComponent } from './chickenmasala.component';

describe('ChickenmasalaComponent', () => {
  let component: ChickenmasalaComponent;
  let fixture: ComponentFixture<ChickenmasalaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChickenmasalaComponent]
    });
    fixture = TestBed.createComponent(ChickenmasalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
