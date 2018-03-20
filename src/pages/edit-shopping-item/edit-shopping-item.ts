import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShoppingListService } from '../../app/services/shopping-list/shopping-list.service';
import { ToastService } from '../../app/services/toast/toast.service';
import { Item } from '../../app/models/item/item.model';




@IonicPage()
@Component({
  selector: 'page-edit-shopping-item',
  templateUrl: 'edit-shopping-item.html',
})
export class EditShoppingItemPage {
  item: Item;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private shopping: ShoppingListService,
              private tost: ToastService) {
  }

  ionViewWillLoad() {
    this.item = this.navParams.get('item');
  }

  saveItem(item: Item) {
    this.shopping.editItem(item).then(() => {
      this.tost.show(`${item.name} saved!`);
      this.navCtrl.setRoot('HomePage');
    });
  }

  removeItem(item: Item) {
    this.shopping.removeItem(item).then(() => {
      this.tost.show(`${item.name} deleted!`);
      this.navCtrl.setRoot('HomePage');
    });
  }

}
