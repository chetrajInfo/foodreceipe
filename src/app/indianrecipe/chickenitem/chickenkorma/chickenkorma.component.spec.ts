import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChickenkormaComponent } from './chickenkorma.component';

describe('ChickenkormaComponent', () => {
  let component: ChickenkormaComponent;
  let fixture: ComponentFixture<ChickenkormaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChickenkormaComponent]
    });
    fixture = TestBed.createComponent(ChickenkormaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
