import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Dish } from './entities/dish.entity';
import { Order } from './entities/order.entity';
import { Reservation } from './entities/reservation.entity';
import { Table } from './entities/table.entity';

@Injectable()
export class RestaurantService {
    
    private orderList: Order[] = [];

    private reservations: Reservation[] = [];

    private allTables: Table[] = [
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

    private menu: Dish[] = [
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
    
    // Funções de listagem [
    listMenu() {
        return this.menu;
    }

    listOrder() {
        return this.orderList;
    }

    listTables() {
        return this.allTables;
    }

    listReservations() {
        return this.reservations;
    }
    // ]

    makeOrder(updateOrder: any) {
        this.orderList.find(test => test.id === updateOrder.id);
        
        updateOrder.status = 'Pending';
        this.orderList.push(updateOrder);
    
        throw new HttpException(
            `Order registered!`,
            HttpStatus.ACCEPTED,
        );
    }

    updateOrderStatus(id: number, status: string) {
        const order = this.orderList.find(order => order.id === id);

        if (!order) {
            throw new HttpException(
                `Order not found!`,
                HttpStatus.NOT_FOUND,
            );
        } else {
            order.status = status;

            throw new HttpException(
                `Status updated!`,
                HttpStatus.ACCEPTED,
            );
        }
    }

    reserveTable(makeReservation: Reservation) {
        const table = this.allTables.find(test => test.id === makeReservation.tableNumber);
      
        if (!table) {
          throw new HttpException(
            `Table not found!`,
            HttpStatus.NOT_FOUND,
          );
        } else {
          if (table.status === 'Available') {
            if (makeReservation.peopleNumber <= table.max) {
                this.reservations.push(makeReservation);
                table.status = 'Reserved';
        
                throw new HttpException(
                    `Table reserved!`,
                    HttpStatus.ACCEPTED,
                );
            } else {
                throw new HttpException(
                    `Maximum capacity of people exceeded!`,
                    HttpStatus.METHOD_NOT_ALLOWED,
                );
            }
          } else {
            throw new HttpException(
              `Table not available!`,
              HttpStatus.METHOD_NOT_ALLOWED,
            );
          }
        }
      }

}
