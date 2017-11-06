import { Injectable } from "@angular/core"
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import { ShoppingCartService } from '../restaurants/restaurant-detail/shopping-cart/shopping-cart.service'
import { CartItem } from '../restaurants/restaurant-detail/shopping-cart/cart-item.model'
import { Order, OrderItem } from './order.model'
import { BACKEND_API } from '../app.backend-api'

import {LoginService} from '../security/login/login.service'

@Injectable()
export class OrderService {
    
    constructor (private cartService: ShoppingCartService, private http: HttpClient, private loginService: LoginService){}

    itemsValue(): number {
        return this.cartService.total();
    }

    cartItems(): CartItem[] {
        return this.cartService.items
    }

    increaseQtd(item: CartItem) {
        this.cartService.increaseQtd(item);
    }

    decreaseQtd(item: CartItem) {
        this.cartService.decreaseQtd(item);
    }

    removeItem(item: CartItem) {
        this.cartService.removeItem(item);
    }

    clear() {
        this.cartService.clear();
    }

    checkOrder (order: Order): Observable<String> {
        let headers = new HttpHeaders()
        if (this.loginService.isLoggedIn()) {
            headers = headers.set('Authorization', `Baerer ${this.loginService.user.token}`)
        }
        return this.http.post<Order>(`${BACKEND_API}/orders`, order, {headers:headers})
        .map((order: Order) => order.id)
    }
}