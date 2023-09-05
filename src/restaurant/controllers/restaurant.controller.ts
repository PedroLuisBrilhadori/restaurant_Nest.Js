import { Controller, Get } from '@nestjs/common';
import { RestaurantService } from '../services/restaurant.service';

@Controller('restaurant')
export class RestaurantController {
    constructor(private readonly restaurantService: RestaurantService) {}

    @Get('showMenu')
    listMenu() {
        return this.restaurantService.listMenu();
    }

    @Get('showTables')
    listTables() {
        return this.restaurantService.listTables();
    }
}
