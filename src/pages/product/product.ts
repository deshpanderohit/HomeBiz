import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { ConferenceData } from '../../providers/conference-data';
import { MapPage } from '../map/map';

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

  toast: any;
  today = new Date();
  timeslots: any;
  time: any;
  data: any = [];
  products: any = [];
  prodCart: Array<{ cid: string, prod_id: string, qty: string, req_dt: string, bs_id: string, ins_usr: string  }> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public confData: ConferenceData, public storage: Storage, public toastCtrl: ToastController) {
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
        
        this.confData.bookingSlots().subscribe(data => {
          this.timeslots = data;
          console.log("Timeslots: "+JSON.stringify(this.timeslots));
        })
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

  addToCart(product: any, today: Date,time: any) {
    console.log("Product: "+JSON.stringify(product));
    console.log("Date: "+JSON.stringify(today));
    console.log("Time: "+JSON.stringify(time));
    //cust_id,prod_id,qty,req_dt,bs_id,ins_dt,ins_usr

    this.storage.get('cid').then(result => {
//      console.log("Data: "+data);
      if(result) {
        this.storage.get('username').then( data => {
          if(data) {
            let cid = result;
            let name = data;

            this.confData.addToCart(cid,product.prod_id,product.quantity.toString(),today.toString(),time.bs_id,name).subscribe(data => {
              console.log("Data Received: "+data.message);
              this.toast = this.toastCtrl.create({
                message: 'Product added to cart',
                showCloseButton: true,
                closeButtonText: 'View'
              });
    
              this.toast.onDidDismiss((data,role) => {
                console.log("Success: "+data);
                if (role == 'close') {
                  this.navCtrl.push(MapPage);
                }
              });
              this.toast.present();
    
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
