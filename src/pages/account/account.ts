import { Component } from '@angular/core';

import { AlertController, NavController, ModalController } from 'ionic-angular';

import { UserData } from '../../providers/user-data';
import { ProfilePage } from '../profile/profile';
import { ChangePasswordPage } from '../change-password/change-password';


@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {
  username: string;

  constructor(public alertCtrl: AlertController, public nav: NavController, public userData: UserData, public modalCtrl: ModalController) {

  }

  ngAfterViewInit() {
    this.getUsername();
  }

  updateProfile() {
    //console.log('Clicked to update picture');
    this.nav.push(ProfilePage);
  }

  // Present an alert with the current username populated
  // clicking OK will update the username and display it
  // clicking Cancel will close the alert and do nothing
  getUsername() {
    this.userData.getUsername().then((username) => {
      this.username = username;
    });
  }

  changePassword() {
    //console.log('Clicked to change password');
    let modal = this.modalCtrl.create(ChangePasswordPage);
    modal.present();
  }

  logout() {
    this.userData.logout();
    this.nav.setRoot('LoginPage');
  }

}
