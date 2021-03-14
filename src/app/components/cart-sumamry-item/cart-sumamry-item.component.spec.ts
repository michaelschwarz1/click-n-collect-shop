import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartSumamryItemComponent } from './cart-sumamry-item.component';

describe('CartSumamryItemComponent', () => {
  let component: CartSumamryItemComponent;
  let fixture: ComponentFixture<CartSumamryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartSumamryItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartSumamryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
