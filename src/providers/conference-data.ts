import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { UserData } from './user-data';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';


@Injectable()
export class ConferenceData {
  data: any;

  constructor(public http: Http, public user: UserData) { }
  
  getProducts() {
    return this.http.get('http://localhost/hb/product/newArrival.php').map(result => result.json());
  }

  getTopTrending() {
    return this.http.get('http://localhost/hb/product/topTrending.php').map(result => result.json());
  }

  getProductDetails(prod_id: any) {
    let data=JSON.stringify({prod_id: prod_id});
    return this.http.post('http://localhost/hb/product/product_details.php',data).map(result => result.json());
  }

  getProductCategories() {
    return this.http.get('http://localhost/hb/product/productCategories.php').map(result => result.json());
  }

  getCategoryDetails(id: any,name: any) {
    let data=JSON.stringify({ cat_id: id, cat_name: name });
    return this.http.post('http://localhost/hb/product/categoryDetails.php',data).map(result => result.json());
  }

  getProductByName(prod_name: any) {
    let data = JSON.stringify({prod_name: prod_name});
    return this.http.post('http://localhost/hb/product/productInfo.php',data).map(result => result.json());
  }
}
