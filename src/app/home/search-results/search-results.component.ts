import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ProductSearchParams, ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'nga-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  products$:Observable<any>=new Observable();
  x:ProductSearchParams;
  constructor(private _router:ActivatedRoute,private _servise: ProductService) { }
  
  ngOnInit() {
   this.products$ = this._router.queryParams.pipe( switchMap( (params:ProductSearchParams)  =>this._servise.search(params) ));
   }

}
 