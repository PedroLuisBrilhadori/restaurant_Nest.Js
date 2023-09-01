import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
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
        return this.restaurantService.listTables();
    }

    @Get('listReservations')
    listReservations() {
        return this.restaurantService.listReservations();
    }
    
    @Patch('update')
    updateOrderStatus(@Body() updateStatus: Order) {
        return this.restaurantService.updateOrderStatus(updateStatus);
    }

    @Post('verify')
    verifyStatus(@Body() idVerify) {
        return this.restaurantService.verifyStatus(idVerify);
    }

    @Post('makeOrder')
    makeOrder(@Body() updateOrdersList: Order) {
        return this.restaurantService.makeOrder(updateOrdersList);
    }

    @Post('reserveTable')
    reserveTable(@Body() makeReservation: Reservation) {
        return this.restaurantService.makeReservation(makeReservation);
    }
}
