import { Component } from '@angular/core';

// import { Contact } from '@capacitor-community/contacts';

import { Plugins, Share } from '@capacitor/core';
import { SMS } from '@ionic-native/sms/ngx';
import { isPlatform } from '@ionic/angular';
const { Contacts } = Plugins;
import { Contact } from './../phone-contact';

import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  [x: string]: any;
  contacts = [];
  // countrycode: string = '49';
  // whatsappnumber: string = '17662770830';
  url: string =
    'https://wa.me/' + this.countrycode + this.whatsappnumber + '?text=TESTEST';
  text: 'Test text';

  constructor(private sms: SMS, private socialSharing: SocialSharing) {
    this.loadContacts();
  }

  loadContacts() {
    this.getPermissions();
    this.getContacts();
  }

  // async basicShare() {
  //   // await Share.share({
  //   //   title: 'Test Title',
  //   //   text: 'Test text',
  //   //   url: 'https://github.com/cakicitu/',
  //   // });
  // }

  async whatsappShare() {
    this.socialSharing
      .shareViaWhatsApp('this.is.the.text', '', 'this.is.the.url')
      .then((res) => {
        // Success
      })
      .catch((e) => {
        // Error!
      });
  }

  async instagramShare() {
    this.socialSharing
      .shareViaInstagram('text', '')
      .then((res) => {
        // Success
      })
      .catch((e) => {
        // Error!
      });
  }

  async facebookShare() {
    this.socialSharing
      .shareViaFacebook('this.is.the.text', '', 'this.is.the.url')
      .then((res) => {
        // Success
      })
      .catch((e) => {
        // Error!
      });
  }

  async emailShare(email: string) {
    this.socialSharing
      .canShareViaEmail()
      .then((res) => {
        // Success
      })
      .catch((e) => {
        // Error!
      });

    this.socialSharing
      .shareViaEmail('this.is.the.text', 'subject', [email])
      .then((res) => {
        // Success
      })
      .catch((e) => {
        // Error!
      });
  }

  async twitterShare() {
    this.socialSharing
      .shareViaTwitter('this.is.the.text', '', 'this.is.the.url')
      .then((res) => {
        // Success
      })
      .catch((e) => {
        // Error!
      });
  }

  async getPermissions(): Promise<void> {
    Contacts.getPermissions();
  }

  async getContacts(): Promise<void> {
    console.log('tesbutton clicked');
    Contacts.getContacts().then((result) => {
      console.log('result is:', result);
      // const phoneContacts: [Contact] = result.contacts;
      this.contacts = result.contacts;
    });
  }

  sendSms(nummer: string) {
    // this.sms.send('+4917662770830', 'Hello world!');
    this.sms.send(nummer, 'Test Nachricht');
  }

  // async loadContacts() {
  //   if (isPlatform('android')) {
  //     let permission = await Contacts.getPermissions();
  //     if (!permission.granted) {
  //       return;
  //     }
  //   }
  //   Contacts.getContacts().then((result) => {
  //     console.log(result);
  //     // for (const contact of result.contacts) {
  //     //     console.log(contact);
  //     // }
  //     this.contacts = result.contacts;
  //   });
  // }

  // checkSMSPermission() {
  //   this.androidPermissions
  //     .checkPermission(this.androidPermissions.PERMISSION.SEND_SMS)
  //     .then(
  //       (result) => console.log('Has permission?', result.hasPermission),
  //       (err) =>
  //         this.androidPermissions.requestPermission(
  //           this.androidPermissions.PERMISSION.SEND_SMS
  //         )
  //     );
  // }
  // requestSMSPermission() {
  //   // tslint:disable-next-line: max-line-length
  //   this.androidPermissions.requestPermissions([
  //     this.androidPermissions.PERMISSION.SEND_SMS,
  //     this.androidPermissions.PERMISSION.BROADCAST_SMS,
  //   ]);
  // }

  // sendSMS() {
  //   this.checkSMSPermission();
  //   this.contactComponent.getContact();
  //   const numberOne = this.contactComponent.mContacts[0].number;
  //   const numberTwo = this.contactComponent.mContacts[1].number;
  //   const numbeThree = this.contactComponent.mContacts[2].number;
  //   const numberFour = this.contactComponent.mContacts[3].number;
  //   const numberFive = this.contactComponent.mContacts[4].number;
  //   console.log(numberOne);

  //   // tslint:disable-next-line: max-line-length
  //   const message =
  //     this.messageComponent.dangerMessage +
  //     ' my location is: lat: ' +
  //     this.latitude.toString() +
  //     'lng: ' +
  //     this.longitude.toString();
  //   console.log('number=' + numberOne + ', message= ' + message);

  //   // CONFIGURATION
  //   const options = {
  //     replaceLineBreaks: false, // true to replace \n by a new line, false by default
  //     android: {
  //       intent: '', // send SMS with the native android SMS messaging
  //       // intent: '' // send SMS without opening any other app
  //     },
  //   };
  //   this.sms
  //     .send(numberOne, message, options)
  //     .then(() => {
  //       this.presentAlert('Success', 'message has been sent');
  //     })
  //     .catch((error) => {
  //       this.presentAlert('Error', 'Failed: ' + error);
  //     });
  // }
}
