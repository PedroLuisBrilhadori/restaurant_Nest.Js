import { Injectable } from "@nestjs/common";
import { Review } from "../entities/review.entity";
import { Order } from "../entities/order.entity";
import { Reservation } from "../entities/reservation.entity";
import { Table } from "../entities/table.entity";
import { Dish } from "../entities/dish.entity";

@Injectable()
export class RestaurantRepository{
    dishReviews: Review[] = [];
    
    orderList: Order[] = [];

    reservations: Reservation[] = [];

    allTables: Table[] = [
        {
            id: 1,
            max: 2,
            status: "Available"
        },
        {
            id: 2,
            max: 2,
            status: "Available"
        },
        {
            id: 3,
            max: 4,
            status: "Available"
        },
        {
            id: 4,
            max: 4,
            status: "Available"
        },
        {
            id: 5,
            max: 6,
            status: "Available"
        },
        {
            id: 6,
            max: 6,
            status: "Available"
        },
    ];

    menu: Dish[] = [
        {
            id: 1,
            name: 'Prato 1',
            description: 'Este é o prato 1',
            price: 12.50
        },
        {
            id: 2,
            name: 'Prato 2',
            description: 'Este é o prato 2',
            price: 15.00
        },
        {
            id: 3,
            name: 'Prato 3',
            description: 'Este é o prato 3',
            price: 17.50
        },
        {
            id: 4,
            name: 'Prato 4',
            description: 'Este é o prato 4',
            price: 20.00
        },
        {
            id: 5,
            name: 'Prato 5',
            description: 'Este é o prato 5',
            price: 22.50
        },
    ];
}