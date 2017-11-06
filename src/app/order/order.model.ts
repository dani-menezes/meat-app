class Order {
    constructor (
        public id: string,
        public address: string,
        public number: number,
        public optional: string,
        public paymentOption: string,
        public orderItems: OrderItem[] = []
    ){}
}

class OrderItem {
    constructor(
        public quatity: number, 
        public menuId: String
    ){}
}

export {Order, OrderItem}