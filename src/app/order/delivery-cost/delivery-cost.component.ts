import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-delivery-cost',
  templateUrl: './delivery-cost.component.html'
})
export class DeliveryCostComponent implements OnInit {

  @Input() delivery: number
  @Input() itemsValue: number

  constructor() { }

  ngOnInit() {
  }

  total(): number {
    var total = this.delivery + this.itemsValue;
    return (total !== undefined && total > 0) ? total : 0;
  }

}
