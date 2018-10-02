import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConferenceData } from '../../providers/conference-data';
import { Storage } from '@ionic/storage';
import { UserData } from '../../providers/user-data';
import { FormGroup, FormControl,Validators } from '@angular/forms';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage implements OnInit {

  custInfo: any = [];
  cid: any;
  member: FormGroup;
  mob: any;
  pincode:any;
	email: any;
  name: any;
  dob: any;
  today = new Date();
  address: any;
  gender: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public confData: ConferenceData, public storage: Storage, public userData: UserData) {
    //this.cid = this.userData.getCustId();
    storage.get('cid').then(data => {
      console.log("Data: "+data);
      this.cid = data;
      console.log("Cid is: "+this.cid);

      this.confData.custInfo(this.cid).subscribe(data => {
        this.custInfo = data;
        console.log("Cust Info: "+JSON.stringify(this.custInfo));
      })
  
    })

    //this.cid = this.storage.get('cid');
    //console.log("CId: "+JSON.stringify(this.cid));
  }

  ngOnInit() {
    this.member = new FormGroup({

      name: new FormControl('',[Validators.required]),
      email: new FormControl('', [Validators.required,Validators.email]),
      dob: new FormControl('',[Validators.required]),
      mob: new FormControl('', [Validators.required, Validators.minLength(10),Validators.maxLength(10)]),
      address: new FormControl('',[Validators.required]),
      pincode: new FormControl('', [Validators.required, Validators.minLength(6),Validators.maxLength(6)]),
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  updateProfile() {
    //let data = JSON.stringify({ name: this.name, email: this.email,dob: this.dob, mob: this.mob, })
    this.storage.get('cid').then(data => {
      //console.log("Data: "+data);
      this.cid = data;
      console.log("Cid is: "+this.cid);
      let type: any;
      
      if(this.name != "") {
        type = "cust_fname";
        this.confData.updateProfile(type,this.name,this.cid).subscribe(data => {
          console.log(data.message);
        });
      }
      else if(this.email != "") {
        type = "cust_email";
        this.confData.updateProfile(type,this.email,this.cid).subscribe(data => {
          console.log(data.message);
        });
      }
      else if(this.dob != "") {
        type = "cust_dob";
        this.confData.updateProfile(type,this.dob,this.cid).subscribe(data => {
          console.log(data.message);
        });
      }
      else if(this.address != "") {
        type = "cust_addr";
        this.confData.updateProfile(type,this.address,this.cid).subscribe(data => {
          console.log(data.message);
        });
      }
      else if(this.gender != "") {
        type = "cust_gen";
        this.confData.updateProfile(type,this.gender,this.cid).subscribe(data => {
          console.log(data.message);
        });
      }
      else if(this.mob != "") {
        type = "cust_cntc";
        this.confData.updateProfile(type,this.mob,this.cid).subscribe(data => {
          console.log(data.message);
        });
      }
      else if(this.pincode != "") {
        type = "loc_zip";
        this.confData.updateProfile(type,this.pincode,this.cid).subscribe(data => {
          console.log(data.message);
        });
      }

    })      
  }

}
