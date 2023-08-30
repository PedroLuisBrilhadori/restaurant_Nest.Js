import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Dish } from './entities/dish.entity';
import { Order } from './entities/order.entity';

@Injectable()
export class RestaurantService {
    private orderList: Order[] = [];

    private menu: Dish[] = [
        {
            id: 1,
            name: 'Prato 1',
            description: 'Este é o prato 1',
            price: 12.50
        },
        {
            id: 2,
            name: 'Prato 2',
            description: 'Este é o prato 2',
            price: 15.00
        },
        {
            id: 3,
            name: 'Prato 3',
            description: 'Este é o prato 3',
            price: 17.50
        },
        {
            id: 4,
            name: 'Prato 4',
            description: 'Este é o prato 4',
            price: 20.00
        },
        {
            id: 5,
            name: 'Prato 5',
            description: 'Este é o prato 5',
            price: 22.50
        },
    ];
    
    listMenu() {
        return this.menu;
    }

    listOrder() {
        return this.orderList;
    }

    makeOrder(updateOrder: any) {
        this.orderList.push(updateOrder);

        // return updateOrder;
        throw new HttpException(
            `Order updated!`,
            HttpStatus.ACCEPTED,
        );
    }

}
