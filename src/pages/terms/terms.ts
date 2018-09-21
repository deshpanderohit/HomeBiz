import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';

/**
 * Generated class for the TermsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-terms',
  templateUrl: 'terms.html',
})
export class TermsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public docViewer: DocumentViewer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TermsPage');
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
    this.docViewer.viewDocument('assets/terms.pdf', 'application/pdf', options);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }


}
