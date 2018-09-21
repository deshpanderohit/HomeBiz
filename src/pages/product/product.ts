import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { ConferenceData } from '../../providers/conference-data';

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {

  today = new Date();
  timeslots: any;
  time: any;
  data: any = [];
  products: any = [];

  initialize() {

    this.timeslots = [
      { "st": "9 AM", "et": "12 PM" },
      { "st": "12 PM", "et": "3 PM" },
      { "st": "3 PM", "et": "6 PM" },
      { "st": "6 AM", "et": "9 PM" },
    ];
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public confData: ConferenceData) {
      this.initialize();
      this.data = this.navParams.get('product');
      this.confData.getProductDetails(this.data.prod_id).subscribe(data => {
        this.products = data;

        this.products = this.products.map(function(e) {
          var o = Object.assign({},e);
          o.quantity = "1";

          return o;
        })

        console.log("Product Details: "+JSON.stringify(this.products));
        this.today.setDate(this.products.lead_time_display);
  
      })

      
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');

  }

  increment(ev: any, product: any) {
    ev.stopPropagation();

    product.quantity++;
  }

  decrement(ev: any, product: any) {
    ev.stopPropagation();

    if(product.quantity>1)
      product.quantity--;
  }

 // addToCart(product: any, today: Date,time: any) {
    //console.log("Product: "+JSON.stringify(product));
    //console.log("Date: "+JSON.stringify(today));
    //console.log("Time: "+JSON.stringify(time));
  //}

}
