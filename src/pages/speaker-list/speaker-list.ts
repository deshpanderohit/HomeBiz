import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';


import { ConferenceData } from '../../providers/conference-data';
import { CategoryDetailsPage } from '../category-details/category-details';
//import { CategoryDetailsPage } from '../category-details/category-details';



@Component({
  selector: 'page-speaker-list',
  templateUrl: 'speaker-list.html'
})
export class SpeakerListPage {
  speakers: any[] = [];
  categories: any = [];

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public confData: ConferenceData
  ) {
  }

  ionViewDidLoad() {
    this.confData.getProductCategories().subscribe(data => {
      this.categories = data;
  });

  }

  view(category: any) {
    //this.navCtrl.push(CategoryDetailsPage,{product: product});
    let modal = this.modalCtrl.create(CategoryDetailsPage,{category: category});
    modal.present();
  }

}
