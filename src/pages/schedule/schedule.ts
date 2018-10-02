import { Component, ViewChild } from '@angular/core';

import { AlertController, App, List, ModalController, NavController, ToastController, LoadingController } from 'ionic-angular';
//import { Http } from '@angular/http';

/*
  To learn how to use third party libs in an
  Ionic app check out our docs here: http://ionicframework.com/docs/v2/resources/third-party-libs/
*/
// import moment from 'moment';

import { ConferenceData } from '../../providers/conference-data';
import { UserData } from '../../providers/user-data';

import { ScheduleFilterPage } from '../schedule-filter/schedule-filter';
import { ProductPage } from '../product/product';


@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html'
})
export class SchedulePage {
  // the list is a child of the schedule page
  // @ViewChild('scheduleList') gets a reference to the list
  // with the variable #scheduleList, `read: List` tells it to return
  // the List and not a reference to the element
  @ViewChild('scheduleList', { read: List }) scheduleList: List;

  dayIndex = 0;
  queryText = '';
  segment = 'all';
  excludeTracks: any = [];
  shownSessions: any = [];
  groups: any = [];
  confDate: string;
  products: any = [];
  data: any = [];

  constructor(
    public alertCtrl: AlertController,
    public app: App,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public confData: ConferenceData,
    public user: UserData,
    
  ) {}

  ionViewDidLoad() {
    this.app.setTitle('Schedule');

    this.confData.getProducts().subscribe(data => {
      this.products = data;
      
      //console.log("Products: "+JSON.stringify(this.products));
    })

    this.confData.getTopTrending().subscribe(data => {
      this.data = data;
    })

  }

  presentFilter() {
    let modal = this.modalCtrl.create(ScheduleFilterPage, this.excludeTracks);
    modal.present();

    modal.onWillDismiss((data: any[]) => {
      if (data) {
        this.excludeTracks = data;
      }
    });

  }

  view(product: any) {
    //event.stopPropagation();
    console.log("Product Clicked: "+JSON.stringify(product.prod_name));
    this.navCtrl.push(ProductPage,{product: product});
  }

  viewAllNewArrivals(event: any) {
    event.stopPropagation();

  }

  viewAllTrending(event: any) {
    event.stopPropagation();
  }

}
