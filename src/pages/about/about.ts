import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';
import { AboutModalPage } from '../about-modal/about-modal';
import { FaqPage } from '../faq/faq';
import { PoliciesPage } from '../policies/policies';
import { TermsPage } from '../terms/terms';
//import { File } from '@ionic-native/file';

//import { FileTransfer } from '@ionic-native/file-transfer'
//import { DocumentViewer } from '@ionic-native/document-viewer';



@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  categories: any = [];

  initialize() {
    this.categories = [
      { "cat_id": "1", "cat_name": "About Us" },
      { "cat_id": "2", "cat_name": "Sell on Homebiz365" },
      { "cat_id": "3", "cat_name": "FAQ's" },
      { "cat_id": "4", "cat_name": "Privacy" },
      { "cat_id": "5", "cat_name": "Terms and Conditions" }
    ];
  }
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    this.initialize();
  }

  openURL() { 
    window.open('www.clairvoyantbizinfo.com', '_system');
  }

  open(category: any) {
    if(category.cat_name == "About Us") {
      let modal = this.modalCtrl.create(AboutModalPage);
      modal.present();
    }
    
    if(category.cat_name == "FAQ's") {
      let modal = this.modalCtrl.create(FaqPage);
      modal.present();
    }

    if(category.cat_name == "Privacy") {
      let modal = this.modalCtrl.create(PoliciesPage);
      modal.present();
    }

    if(category.cat_name == "Terms and Conditions") {
      let modal = this.modalCtrl.create(TermsPage);
      modal.present();
    }
  }

}