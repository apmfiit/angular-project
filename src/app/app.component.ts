import { Component } from '@angular/core';

class Item {
  product: string;
  price: number;
  description: string;

  constructor(product: string, price: number, description: string) {

    this.product = product;
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
  price: number = 0;

  items: Item[] =
  [
    { product: "Хлеб", price: 50, description: 'Белый ЯХК' },
    { product: "Яйцо", price: 70, description: 'куриное' },
    { product: "Молоко", price: 60, description: 'обезжиренное' }
  ];

  addItem(title: string, price: number, description: string): void {
    if(title==null && price==null && description==null)
      return;
    this.items.push(new Item(title, price, description));
  }
}
