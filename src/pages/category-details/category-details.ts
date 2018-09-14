import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { ConferenceData } from '../../providers/conference-data';

import { ProductDetailsPage } from '../product-details/product-details';

/**
 * Generated class for the CategoryDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category-details',
  templateUrl: 'category-details.html',
})
export class CategoryDetailsPage {

  category: any = [];
  categories: any = [];
  product: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,public confData: ConferenceData, public toastCtrl: ToastController) {
    this.category = this.navParams.get("category");

    let id = this.category.cat_id;
    let name = this.category.cat_name;
    this.confData.getCategoryDetails(id,name).subscribe(data => {
      console.log("Data : "+JSON.stringify(data));
      this.categories = data;

    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryDetailsPage');
  }

  viewProduct(product: any) {
    let category = product.cs_name;
    this.confData.getProductByName(category).subscribe(data => {
      if(data) {
        this.product = data;
        console.log("Product: "+JSON.stringify(this.product));
        this.navCtrl.push(ProductDetailsPage,{product: this.product,pname: category});
      }
      else {
        const toast = this.toastCtrl.create({
          message: 'No Vendors available right now',
          showCloseButton: true,
          closeButtonText: 'Ok'
        });
        toast.present();
      }
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
