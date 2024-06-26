import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { iMenu } from './Models/i-menu';
import { HttpClient } from '@angular/common/http';
import { iOrder } from './Models/iorder';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<iMenu[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  get cartItems(): iMenu[] {
    return this.cartItemsSubject.value;
  }

  addToCart(item: iMenu) {  //Questo metodo aggiunge un elemento al carrello. Se l'elemento è già presente nel carrello, incrementa la quantità. Altrimenti, aggiunge un nuovo elemento.
                                                //Aggiorna il cartItemsSubject con il nuovo stato del carrello.
    const currentItems = this.cartItems;
    const cartItem = currentItems.find((ci) => ci.id === item.id);
    if (cartItem) {
      cartItem.quantity += item.quantity;
    } else {
      currentItems.push({ ...item });
    }
    this.cartItemsSubject.next(currentItems);
  }

  removeFromCart(item: iMenu) {
    const currentItems = this.cartItems;
    const index = currentItems.findIndex((ci) => ci.id === item.id);
    if (index !== -1) {
      currentItems.splice(index, 1);
    }
    this.cartItemsSubject.next(currentItems);
  }

  clearCart() {
    this.cartItemsSubject.next([]);
  }

  getTotalCost(): number {
    return this.cartItems.reduce(
      (total, item) => total + item.prezzo * item.quantity,
      0
    );
  }

  orderUrl: string = 'http://localhost:3000/orders';

  constructor(private http: HttpClient) {}

  orderSubject = new BehaviorSubject<null | iOrder[]>(null);
  order$ = this.orderSubject.asObservable();

  getAll(): Observable<iOrder[]> {
    return this.http.get<iOrder[]>(this.orderUrl);
  }
}
