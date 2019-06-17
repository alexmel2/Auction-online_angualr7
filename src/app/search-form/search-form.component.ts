import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../shared/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'nga-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  searchForm: FormGroup;
  @Output() search = new EventEmitter();
  constructor(private _http: ProductService,fb:FormBuilder ,private _router: Router) {
this.searchForm=fb.group({
  title:[,Validators.minLength(2)],
  minPrice:[,Validators.minLength(0)]


})


   }

  ngOnInit() {
  
  }
   withoutEmpyValues (obj:any):any {
    var   keys=Object.keys(obj)
  return keys.reduce((newObject,key)=>{if(obj[key]) {
                                               newObject[key]=obj[key]
                                              }  
   return newObject
  
  
  
  },{})
    }
  onSearch(): void {
    console.log('searcForm.valid :', this.searchForm);
    if (this.searchForm.valid) {
      this.search.emit();
      this._router.navigate(['/search-results'],{queryParams:this.withoutEmpyValues(this.searchForm.value)})
      

    }


  }
 
}
