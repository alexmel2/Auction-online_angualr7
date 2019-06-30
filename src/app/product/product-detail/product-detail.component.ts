import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Product } from '../../shared/services';

@Component({
  selector: 'nga-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnChanges {
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log('changes :', changes);

  }
    @Input() product:Product;
  constructor() {

console.log('this.product :', this.product);

   }

  ngOnInit() {
console.log('this.product :', this.product);

  }

}
