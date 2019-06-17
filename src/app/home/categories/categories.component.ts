import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ProductService, Product } from '../../shared/services';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'nga-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
   categoriesNames$: Observable<string[]>;
   products$: Observable<Product[]>;
  constructor( private productService: ProductService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.categoriesNames$ = this.productService.getDistinctCategories().pipe(
      map(categories => ['all', ...categories]));

   this.products$= this.route.paramMap.pipe(
    switchMap((parms:ParamMap)=>this.getByCategory(parms.get("category").toLowerCase()))

   )
   ;
  }

  getByCategory(category:string)
  {
  return  category == "all" ?  this.productService.getAll() 
          : this.productService.getByCategory(category)
  }

}
