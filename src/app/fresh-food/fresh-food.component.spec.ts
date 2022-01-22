import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshFoodComponent } from './fresh-food.component';

describe('FreshFoodComponent', () => {
  let component: FreshFoodComponent;
  let fixture: ComponentFixture<FreshFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreshFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreshFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
