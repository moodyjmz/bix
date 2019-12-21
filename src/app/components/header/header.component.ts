import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(
      private actionSheetController: ActionSheetController
  ) {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      translucent: true,
      header: 'Manage Pigs',
      buttons: [
        {
          text: 'Add pigs',
          role: 'destructive',
          icon: 'add',
          handler: () => {
            console.log('Add clicked');
          }
        },
        {
          text: 'Move pigs',
          icon: 'shuffle',
          handler: () => {
            console.log('Move clicked');
          }
        },
        {
          text: 'Sell pigs',
          icon: 'basket',
          handler: () => {
            console.log('Sell clicked');
          }
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await actionSheet.present();
  }

  ngOnInit() {
  }
}
