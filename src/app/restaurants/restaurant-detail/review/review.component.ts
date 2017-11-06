import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../restaurant.service'
import { Observable } from 'rxjs/Observable'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'mt-review',
  templateUrl: './review.component.html'
})
export class ReviewComponent implements OnInit {

  reviews: Observable<any>

  constructor(private restaurantService: RestaurantService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.restaurantService.reviews(this.route.parent.snapshot.params['id']);
  }

}
