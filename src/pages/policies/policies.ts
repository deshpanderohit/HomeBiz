import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';

/**
 * Generated class for the PoliciesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-policies',
  templateUrl: 'policies.html',
})
export class PoliciesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public docViewer: DocumentViewer, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PoliciesPage');
  }

  showDocument() {
    var options: DocumentViewerOptions = {
      title: 'Policies',
      documentView: { closeLabel: '' },
      navigationView: { closeLabel: '' },
      email: { enabled: true },
      print: { enabled: true },
      openWith: { enabled: true },
      bookmarks: { enabled: true },
      search: { enabled: false },
      autoClose: { onPause: false }
    }
    this.docViewer.viewDocument('assets/policies.pdf', 'application/pdf', options);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }


}
