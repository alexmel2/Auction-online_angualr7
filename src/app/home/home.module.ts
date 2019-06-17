import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { HomeComponent } from './home.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { CategoriesComponent } from './categories/categories.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ProductGridComponent } from './product-grid/product-grid.component';

const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'categories' },
  { path: 'search-results', component: SearchResultsComponent },
  { path: 'categories',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'all' },
      { path: ':category', component: CategoriesComponent },
    ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    MatTabsModule,
    MatGridListModule,
  ],
  declarations: [
    HomeComponent,
    SearchResultsComponent,
    CategoriesComponent,
    ProductGridComponent
  ]
})
export class HomeModule {}
