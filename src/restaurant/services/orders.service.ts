import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { RestaurantRepository } from "../repositories/restaurant.repository";

@Injectable()
export class OrdersService{
    constructor (readonly restaurantRepository: RestaurantRepository) {}

    listOrder() {
        return this.restaurantRepository.orderList;
    }

    listReviews() {
        return this.restaurantRepository.dishReviews;
    }

    makeReview(updateReviewsList: any) {
        this.restaurantRepository.dishReviews.push(updateReviewsList);
    
        throw new HttpException(
            `Review registered!`,
            HttpStatus.ACCEPTED,
        );
    }

    makeOrder(updateOrdersList: any) {
        updateOrdersList.status = 'Pending';
        this.restaurantRepository.orderList.push(updateOrdersList);
    
        throw new HttpException(
            `Order registered!`,
            HttpStatus.ACCEPTED,
        );
    }

    verifyOrderStatus(idVerify: any) {
        const {id} = idVerify
        const order = this.restaurantRepository.orderList.find(order => order.id === id);

        if (!order) {
            throw new HttpException(
                `Order not found!`,
                HttpStatus.NOT_FOUND,
            );
        } else {
            const data = order.status;
            throw new HttpException(
                `Order status is ${data}!`,
                HttpStatus.ACCEPTED,
            );
        }
    }

    updateOrderStatus(updateStatus: any) {
        const {id, status} = updateStatus;
        const order = this.restaurantRepository.orderList.find(order => order.id === id);

        if (!order) {
            throw new HttpException(
                `Order not found!`,
                HttpStatus.NOT_FOUND,
            );
        } else {
            order.status = status;

            throw new HttpException(
                `Status updated to ${order.status}!`,
                HttpStatus.ACCEPTED,
            );
        }
    }
}