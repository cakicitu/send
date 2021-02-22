import { Component } from '@angular/core';

// import { Contact } from '@capacitor-community/contacts';

import { Plugins } from '@capacitor/core';
import { isPlatform } from '@ionic/angular';
const { Contacts } = Plugins;
import { Contact } from './../phone-contact';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  contacts = [];

  constructor() {
    // this.loadContacts();
    this.getPermissions();
    this.getContacts();
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
}
