import { Injectable } from '@nestjs/common';
import { RestaurantRepository } from '../repositories/restaurant.repository';

@Injectable()
export class RestaurantService {
    constructor (readonly restaurantRepository: RestaurantRepository) {}

    listMenu() {
        return this.restaurantRepository.menu;
    }

    listTables() {
        return this.restaurantRepository.allTables;
    }
}
