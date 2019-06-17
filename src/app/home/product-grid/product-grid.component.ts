import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../shared/services';
import { Observable } from 'rxjs';
import { ObservableMedia } from '@angular/flex-layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'nga-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent implements OnInit {
@Input() products: Product[];
readonly columns$: Observable<number>;

readonly breakpointsToColumnsNumber = new Map([
  [ 'xs', 1 ],
  [ 'sm', 2 ],
  [ 'md', 3 ],
  [ 'lg', 4 ],
  [ 'xl', 5 ],
]);
  constructor(private media: ObservableMedia) {
    this.columns$ = this.media.asObservable()
    .pipe(
       map(mc => <number>this.breakpointsToColumnsNumber.get(mc.mqAlias))
     );
   }

  ngOnInit() {
  }

}
