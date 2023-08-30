import { Module } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { RestaurantController } from './restaurant.controller';

@Module({
  imports: [],
  providers: [RestaurantService],
  controllers: [RestaurantController],
})
export class RestaurantModule {}