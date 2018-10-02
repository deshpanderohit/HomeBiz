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

  validateLogin(username: any, password: any) {
    let data = JSON.stringify({ username: username, password: password });
    return this.http.post('http://localhost/hb/login/validateLogin.php',data).map(result => result.json());
  }

  custInfo(id: any) {
    //console.log("Id is: "+id);
    let data = JSON.stringify({ cust_id: id });
    return this.http.post('http://localhost/hb/customer/custInfo.php',data).map(result => result.json());
  }

  custSignup(name: any,address: any,pincode: any,mob: any,email: any,dob: any,gender: any,username: any,password: any,cpassword: any) {
    let data = JSON.stringify({ name: name, address: address, pincode: pincode,mob: mob, email: email, dob: dob, gender: gender, username: username, password: password, cpassword: cpassword });
    console.log("Signup Data: "+data);
    return this.http.post('http://localhost/hb/customer/custSignup.php',data).map(result => result.json());
  }

  bookingSlots() {
    return this.http.get('http://localhost/hb/category/booking_slots.php').map(result => result.json());
  }

  addToCart(cid: any, prod_id: any, qty: any,req_dt: any,bs_id:any, int_usr:any) {
    let data = JSON.stringify({ cid: cid, prod_id: prod_id, qty: qty, req_dt: req_dt, bs_id: bs_id, int_usr: int_usr })
    console.log("Data: "+data);
    return this.http.post('http://localhost/hb/product/addToCart.php',data).map(result => result.json());
  }

  updateProfile(type: any,data: any,cid: any) {
    let json_data = JSON.stringify({ type: type, data: data, cid: cid });
    console.log("JSON Data: "+json_data);
    return this.http.post('http://localhost/hb/customer/updateProfile.php',json_data).map(result => result.json());
  }

  getCartItems(cid: any) {
    let data = JSON.stringify({ cid: cid });
    return this.http.post('http://localhost/hb/cart/cartItems.php',data).map(result => result.json());
  }
}
