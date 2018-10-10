import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConferenceData } from '../../providers/conference-data';
import { Storage } from '@ionic/storage';

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

  timeslots: any;
  time: any;
  today = new Date();
  products: any = [];
  pname: any;


  initialize() {

    this.timeslots = [
      { "st": "9 AM", "et": "12 PM" },
      { "st": "12 PM", "et": "3 PM" },
      { "st": "3 PM", "et": "6 PM" },
      { "st": "6 AM", "et": "9 PM" },
    ];
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public confData: ConferenceData, public storage: Storage) {
    this.initialize();
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

  addToCart(product: any, today: Date,time: any) {
    console.log("Product: "+JSON.stringify(product));
    console.log("Date: "+JSON.stringify(today));
    console.log("Time: "+JSON.stringify(time));

    this.storage.get('cid').then(result => {
      //      console.log("Data: "+data);
            if(result) {
              this.storage.get('username').then( data => {
                if(data) {
                  let cid = result;
                  let name = data;
      
                  this.confData.addToCart(cid,product.prod_id,product.quantity.toString(),today.toString(),time.bs_id,name).subscribe(data => {
                    console.log("Data Received: "+data.message);
                  })
      /*            this.prodCart.push({
                    'cid': cid,
                    'prod_id': product.prod_id,
                    'qty': product.quantity.toString(),
                    'req_dt': today.toString(),
                    'bs_id': time.bs_id,
                    'ins_usr': name
                  })
                  //console.log("Prod Cart: "+JSON.stringify(this.prodCart));
                  this.confData.addToCart(this.prodCart).subscribe(data => {
        
                    console.log("Data Received: "+data.message);
                    if(data.message == "Added to Cart") {
                      console.log("Product Added");
                    }
                    else
                      console.log("Product Not Added");
                      
                  })
      */          }
              })        
            }  
          })
      
  }

}
