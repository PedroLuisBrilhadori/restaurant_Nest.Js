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
    updateOrderStatus(id: number, status: string) {
        return this.restaurantService.updateOrderStatus(id, status);
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
