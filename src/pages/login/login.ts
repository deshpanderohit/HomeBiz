import { Component } from '@angular/core';
import { ToastController, LoadingController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';
import { NgForm } from '@angular/forms';

import { FormControl, FormGroup, Validators} from '@angular/forms';
import { OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs-page/tabs-page';
import { ConferenceData } from '../../providers/conference-data';

@Component({
  selector: 'page-user',
  templateUrl: 'login.html'
})

export class LoginPage implements OnInit {
	login: UserOptions = { username: '', password: '' };
	submitted = false;
	passwordRegex: any = '((?=.*\d)(?=.*[a-zA-Z]).{4,20})';
	user: FormGroup;
	username:'';
	password:'';
	public form: NgForm;
	result: any;

  constructor(public navCtrl: NavController, public http: Http, public toastCtrl: ToastController, public userData: UserData, public loadingCtrl: LoadingController, public confData: ConferenceData) {

		
   }

 	ngOnInit() {

		this.user = new FormGroup({
			name: new FormControl('', [Validators.required, Validators.minLength(4)]),
			password: new FormControl('',Validators.compose([Validators.required,Validators.minLength(4), Validators.maxLength(20)]))
		});

	}
 
  	userSignup() {
		this.navCtrl.push(SignupPage);
	}

/*
	validateLogin() {
		let data=JSON.stringify({username: this.username, password:this.password});

		console.log("Data: "+data);

		this.http.post('http://localhost/hb/login/validateLogin.php',data).subscribe(res => {
*/
		
/*		let loader = this.loadingCtrl.create({
			content: "Authenticating...",
			duration: 300
		});
		loader.present();
*/		
		
/*		let toast = this.toastCtrl.create({
	      message: 'Welcome '+res.name,
	      duration: 4000
	    });
	    toast.present();
*/
/*
		console.log(JSON.stringify(res));
		this.userData.login(this.username);
		this.navCtrl.setRoot(TabsPage);

	}, () => {
	
		let toast = this.toastCtrl.create({
      	message: 'Incorrect Username or Password',
      	duration: 4000
    	});
    	toast.present();

	});		
		

	}
*/

	validateLogin() {
		//let data=JSON.stringify({username: this.username, password:this.password});
		this.confData.validateLogin(this.username,this.password).subscribe(data => {
			//console.log(JSON.stringify(data));
			if(data) {
				this.result = data;
				this.result.forEach(value => {
					this.userData.login(value.uname);
					this.userData.setId(value.cid);	
				})
				this.navCtrl.setRoot(TabsPage);	
			}
			else {	
				let toast = this.toastCtrl.create({
				message: 'Incorrect Username or Password',
				duration: 4000
				});
				toast.present();
			}
		});		
	}

}
//Validators.pattern(this.passwordRegex)