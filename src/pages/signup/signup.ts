import { Component } from '@angular/core';
import { OnInit, NgZone } from '@angular/core';
import { FormControl, FormGroup, Validators,ValidatorFn,AbstractControl } from '@angular/forms';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { NavController } from 'ionic-angular';

import { UserData } from '../../providers/user-data';
import { ConferenceData } from '../../providers/conference-data';

@Component({
  selector: 'page-user',
  templateUrl: 'signup.html'
})
export class SignupPage implements OnInit {
	mob: any;
  email: any;
	pincode: any;
	address: any;
	cpassword: any;
  fname: any;
	name: any;
	gen: any;
	dob: any;
	gender: any;
  password: any;
  re_password: any;
	username: any;
	memid: any;
	member: FormGroup;
	signup: string;
	captchaPassed: boolean = false;
	captchaResponse: string;

//  signup: UserOptions = { username: '', password: '' };
 	submitted = false;


  constructor(public navCtrl: NavController, public userData: UserData, public http: Http, public zone: NgZone, public confData: ConferenceData) {
}

	ngOnInit() {

	this.member = new FormGroup({

	name: new FormControl('', [Validators.required]),
	address: new FormControl('',[Validators.required]),
	mob: new FormControl('', [Validators.required, Validators.minLength(10),Validators.maxLength(10)]),
	pincode: new FormControl('', [Validators.required, Validators.minLength(6),Validators.maxLength(6)]),
	email: new FormControl('', [Validators.required,Validators.email]),
	dob: new FormControl('',[Validators.required]),
	gen: new FormControl('',[Validators.required]),
	username: new FormControl('', [Validators.required, Validators.minLength(4)]), 
	password: new FormControl('', [Validators.required]),
	re_password: new FormControl('', [Validators.required,this.equalto('password')])
	});

	}

	equalto(field_name): ValidatorFn {
		return (control: AbstractControl): {[key: string]: any} => {

		let input = control.value;

		let isValid=control.root.value[field_name]==input;
		if(!isValid) 
		return { 'equalTo': { isValid } }
		else 
		return null;
		};
	}

	captchaResolved(response: string): void {
 
		this.zone.run(() => {
				this.captchaPassed = true;
				this.captchaResponse = response;
		});

	}

	newCustRegister() {
		//let data=JSON.stringify({name: this.name, address: this.address, pincode: this.pincode, email: this.email,mob: this.mob, dob: this.dob, gender: this.gender,username: this.username, password:this.password, cpassword:this.cpassword});

		this.confData.custSignup(this.name,this.address,this.pincode,this.email,this.dob,this.mob,this.gender,this.username,this.password,this.cpassword).subscribe(data => {
			console.log(data);
		})
		//this.http.post('http://localhost/api/product/gym_signup.php',data).map(res => res.json()).subscribe(res => {alert("success: Userid "+res.userid+" Access Token "+res.token);}, () => {alert("failed");});		
	
	}

}
