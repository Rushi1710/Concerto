import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product:Product;

  constructor() { 
    this.product ={
      id:1,
      ename:"Biryani",
      rating:4.6,
      price:55,
      img:"download/biyani.jpj"
    }
  }

  ngOnInit(): void {
  }

}
