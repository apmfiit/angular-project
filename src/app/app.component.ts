import { Component } from '@angular/core';

class Item {
  title: string;
  price: number;
  description: string;

  constructor(title: string, price: number, description: string) {

    this.title = title;
    this.price = price;
    this.description = description;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title: string;
  description: string;
  price: number;

  items: Item[] =
  [
    { title: "Хлеб", price: 50, description: 'Белый ЯХК' },
    { title: "Яйцо", price: 70, description: 'куриное' },
    { title: "Молоко", price: 60, description: 'обезжиренное' }
  ];

  addItem(title: string, price: number, description: string): void {
    if(title==null || price==null || description==null)
      return;
    this.items.push(new Item(title, price, description));
  }
  deleteItem(item: string, itemId: number): void {
    if (itemId !== -1) {
      this.items.splice(itemId, 1);
    }

  }
}
