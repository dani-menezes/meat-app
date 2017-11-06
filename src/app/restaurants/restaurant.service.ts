import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { Restaurant } from './restaurant/restaurant.model'
import { MenuItem } from './restaurant-detail/menu-item/menu-item.model'
import { ErrorHandler } from '../app.error-handler'
import { BACKEND_API } from '../app.backend-api'

@Injectable()
export class RestaurantService {

    constructor(private http: HttpClient){}

    restaurants(search?: string): Observable<Restaurant[]> {
        let params: HttpParams = undefined;
        if (search) { 
            params = new HttpParams().append('q', search)
        }
        return this.http.get<Restaurant[]>(`${BACKEND_API}/restaurants`, {params: params})
    }

    restaurant(id: string): Observable<Restaurant> {
        return this.http.get<Restaurant>(`${BACKEND_API}/restaurants/${id}`)
    }

    reviews(id: string): Observable<any> {
        return this.http.get(`${BACKEND_API}/restaurants/${id}/reviews`)
            .catch(ErrorHandler.handleError)
    }

    menu(id: string): Observable<MenuItem[]> {
        return this.http.get<MenuItem[]>(`${BACKEND_API}/restaurants/${id}/menu`)
    }
 }