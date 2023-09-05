import { Body, Controller, Get, Patch, Post } from "@nestjs/common";
import { Order } from "../entities/order.entity";
import { OrdersService } from "../services/orders.service";
import { Review } from "../entities/review.entity";

@Controller('order')
export class OrdersController {
    constructor(private readonly orderService: OrdersService) {}
    
    @Get('listOrders')
    listOrder() {
        return this.orderService.listOrder();
    }

    @Get('listReviews')
    listReviews() {
        return this.orderService.listReviews();
    }

    @Post('makeReview')
    makeReview(@Body() updateReviewsList: Review)  {
        return this.orderService.makeReview(updateReviewsList);
    }

    @Post('makeOrder')
    makeOrder(@Body() updateOrdersList: Order) {
        return this.orderService.makeOrder(updateOrdersList);
    }

    @Post('verify')
    verifyOrderStatus(@Body() idVerify) {
        return this.orderService.verifyOrderStatus(idVerify);
    }

    @Patch('update')
    updateOrderStatus(@Body() updateStatus: Order) {
        return this.orderService.updateOrderStatus(updateStatus);
    }
    
}

