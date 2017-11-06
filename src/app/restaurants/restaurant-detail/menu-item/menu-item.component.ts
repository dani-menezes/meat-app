import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'

import { MenuItem } from './menu-item.model'

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  animations: [
    trigger('menuItemAppeared', [
      state('ready', style({opacity: 1})),
      transition ('void => ready', [
        style({opacity: 0, transform: 'translateY(-20px)'}), animate('500ms 0s ease-in-out')
      ] )
    ])
  ]
})
export class MenuItemComponent implements OnInit {

  manuItemState: string = 'ready'

  @Input() menuItem: MenuItem
  @Output() addEvent = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  emitAddEvent() {
    this.addEvent.emit(this.menuItem)
  }

}
