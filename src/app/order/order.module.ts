import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { SharedModule } from '../shared/shared.module'

import { OrderComponent } from './order.component'
import { OrderItemComponent } from './order-item/order-item.component'
import { DeliveryCostComponent } from './delivery-cost/delivery-cost.component'

import { RouterModule, Routes } from '@angular/router'

const ROUTES : Routes = [
    {path: 'order', component: OrderComponent}
]

@NgModule({
    declarations: [ OrderComponent, OrderItemComponent, DeliveryCostComponent ],
    imports: [ SharedModule, RouterModule.forChild(ROUTES) ]
})
export class OrderModule{}