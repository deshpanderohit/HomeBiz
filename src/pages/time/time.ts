import { Component, Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ConferenceData } from '../../providers/conference-data';

/**
 * Generated class for the TimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-time',
  templateUrl: 'time.html',
})
export class TimePage {

  cartItems: any = [];
  timeslots: any = [];
  today: any;
  time: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public renderer: Renderer, public viewCtrl: ViewController, public confData: ConferenceData) {
    this.renderer.setElementClass(viewCtrl.pageRef().nativeElement, 'page-time', true);
    this.cartItems = this.navParams.get("data");
    console.log("Data Received: "+JSON.stringify(this.cartItems));
    this.today = this.cartItems.req_dt;
    this.time = this.cartItems.bs_from+ " - " +this.cartItems.bs_to;

    console.log("Time: "+this.time);
    this.confData.bookingSlots().subscribe(data => {
      this.timeslots = data;
      console.log("Timeslots: "+JSON.stringify(this.timeslots));
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimePage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  saveTime(today,time) {
    let cart_id = this.cartItems.cart_id;
    console.log("Prod Id: "+cart_id);
    console.log("Date: "+JSON.stringify(today));
    console.log("Time: "+JSON.stringify(time));

    this.confData.updateTime(cart_id,today,time).subscribe(data => {
      console.log("Data Received: "+data.message);
    })

  }

}
