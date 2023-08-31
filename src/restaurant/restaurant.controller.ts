import { Body, Controller, Get, Post } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { Order } from './entities/order.entity';
import { Reservation } from './entities/reservation.entity';

@Controller('restaurant')
export class RestaurantController {
    constructor(private readonly restaurantService: RestaurantService) {}

    @Get('menu')
    listMenu() {
        return this.restaurantService.listMenu();
    }

    @Get('listOrders')
    listOrders() {
        return this.restaurantService.listOrder();
    }

    @Get('listTables')
    listTables() {
        return this.restaurantService.listOfTables();
    }

    @Get('listReservations')
    listReservations() {
        return this.restaurantService.listReservations();
    }

    @Post('makeOrder')
    makeOrder(@Body() updateOrder: Order) {
        return this.restaurantService.makeOrder(updateOrder);
    }

    @Post('reserveTable')
    reserveTable(@Body() makeReservation: Reservation) {
        return this.restaurantService.reserveTable(makeReservation);
    }
}
