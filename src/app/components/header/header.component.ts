import { CartService } from './../../services/cart-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartCounter = 0;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cartItemUpdate.subscribe((data) => {
      this.cartCounter = <number>data;
      console.log(data);
    });

  }

}
