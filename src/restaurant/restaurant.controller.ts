import { Body, Controller, Get, Post } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { Order } from './entities/order.entity';

@Controller('restaurant')
export class RestaurantController {
    constructor(private readonly restaurantService: RestaurantService) {}

    @Get('menu')
    listMenu() {
        return this.restaurantService.listMenu();
    }

    @Get('order')
    listOrder() {
        return this.restaurantService.listOrder();
    }

    @Post()
    makeOrder(@Body() updateOrder: Order) {
        return this.restaurantService.makeOrder(updateOrder);
    }
}
