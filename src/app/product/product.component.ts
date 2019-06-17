import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductService } from '../shared/services';
import { Router, ActivatedRoute } from '@angular/router';
import { map, filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'nga-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  suggestedProducts$:Observable <Product[]>
  product$:Observable <Product>
  constructor(private _ProductService:ProductService,
              private _route:ActivatedRoute
    ) {
      this.product$=this._route.paramMap.pipe
      (
        
        map(x=> parseInt( x.get('productId')||'',10)),
      filter(produuctId=>!!produuctId),
       switchMap(productId=>this._ProductService.getById(productId) )
      );
    this.suggestedProducts$=this._ProductService.getAll();
     }

  ngOnInit() {

   
  }

}
