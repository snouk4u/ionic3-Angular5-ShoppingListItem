import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../app/models/item/item.model';
import { ShoppingListService } from '../../app/services/shopping-list/shopping-list.service';
import { ToastService } from '../../app/services/toast/toast.service';


@IonicPage()
@Component({
  selector: 'page-add-shopping-item',
  templateUrl: 'add-shopping-item.html',
})
export class AddShoppingItemPage {
  item: Item = {
    name: '',
    urlPicture: '',
    quantity: undefined,
    price: undefined,
  };

  constructor( public navCtrl: NavController,
               public navParams: NavParams,
               private shopping: ShoppingListService,
               private toast: ToastService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddShoppingItemPage');
  }

  addItem(item: Item) {
    this.shopping.addItem(item).then(ref => {
      this.toast.show(`${item.name} added!`)
      this.navCtrl.setRoot('HomePage', { key: ref.key })
    })
  }

}
