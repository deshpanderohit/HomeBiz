import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup, Validators, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';

/**
 * Generated class for the ChangePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-change-password',
  templateUrl: 'change-password.html',
})
export class ChangePasswordPage implements OnInit {

  cpassword: any;
	password: any;
	member: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ngOnInit() {
    this.member = new FormGroup({
      password: new FormControl('', [Validators.required]),
      re_password: new FormControl('', [Validators.required,this.equalto('password')])
      });
    
  }

  equalto(field_name): ValidatorFn {
		return (control: AbstractControl): {[key: string]: any} => {

		let input = control.value;

		let isValid=control.root.value[field_name]==input
		if(!isValid) 
		return { 'equalTo': {isValid} }
		else 
		return null;
		};
	}


  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangePasswordPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
