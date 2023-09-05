import { Module } from '@nestjs/common';
import { RestaurantRepository } from './repositories/restaurant.repository';
import { RestaurantController, OrdersController, ReservantionsController } from './controllers/index.controllers'
import { OrdersService, ReservationsService, RestaurantService } from './services/index.services';

@Module({
  imports: [],
  providers: [OrdersService, ReservationsService, RestaurantService, RestaurantRepository],
  controllers: [OrdersController, ReservantionsController, RestaurantController],
})
export class RestaurantModule {}
