import { CartService } from './../../services/cart-service.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
cartCounter = 0;
  constructor(private cartService:CartService) { }
  ngOnDestroy(): void {
    if(this.cartService.cartItemAdded){
      this.cartService.cartItemAdded.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.cartService.cartItemAdded.subscribe((data) => {
      this.cartCounter = data;
      console.log(data);});
  }


}
