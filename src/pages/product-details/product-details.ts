import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
})
export class ProductDetailsPage {

  today = new Date();
  products: any = [];
  pname: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.products = this.navParams.get("product");
    this.pname = this.navParams.get("pname");
    //this.pname = this.products.prod_name;

    this.products = this.products.map(function(e) {
      var o = Object.assign({},e);
      o.quantity = "1";

      return o;
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailsPage');
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


}
