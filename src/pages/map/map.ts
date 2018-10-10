import { Component } from '@angular/core';

import { ConferenceData } from '../../providers/conference-data';
import { Storage } from '@ionic/storage';
import { Platform, ModalController, ModalOptions, NavController } from 'ionic-angular';
import { TimePage } from '../time/time';


@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  cid: any;
  cartItems: any = [];

  myModalOptions: ModalOptions = {
    enableBackdropDismiss: false,
    cssClass : 'pricebreakup'
  };


  //@ViewChild('mapCanvas') mapElement: ElementRef;
  constructor(public confData: ConferenceData, public platform: Platform, public storage: Storage, public modalCtrl: ModalController, public navCtrl: NavController) {
  }

  ionViewWillEnter() {
    this.storage.get('cid').then(data => {
      console.log("Data: "+data);
      this.cid = data;
      console.log("Cid is: "+this.cid);

      this.confData.getCartItems(this.cid).subscribe(data => {
        this.cartItems = data;
        console.log("Cart Items: "+JSON.stringify(this.cartItems));
      })
    })    
  }

  ionViewDidLoad() {
  }

  increment(event: any, item: any) {
    event.stopPropagation();
    item.qty++;
  }

  decrement(event: any, item: any) {
    event.stopPropagation();
    item.qty--;
  }

  viewItem(data: any) {
    //console.log("Item Clicked: "+JSON.stringify(item));
    let modal = this.modalCtrl.create(TimePage,{ data: data },this.myModalOptions);
    modal.present();
  }

  order(data: any) {
    console.log("Order Details: "+JSON.stringify(data));
  }

  deleteItem(item: any) {
    console.log("Item: "+JSON.stringify(item));
    this.confData.deleteItem(item.cart_id,item.prod_id).subscribe(data => {
      console.log("Data Received: "+data.message);
      this.navCtrl.setRoot(MapPage);
    })
  }
}