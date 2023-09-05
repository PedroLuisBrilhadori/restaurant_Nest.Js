import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Reservation } from "../entities/reservation.entity";
import { RestaurantRepository } from "../repositories/restaurant.repository";

@Injectable()
export class ReservationsService{
    constructor (readonly restaurantRepository: RestaurantRepository) {}

    listReservations() {
        return this.restaurantRepository.reservations;
    }
    
    makeReservation(makeReservation: Reservation) {
        const table = this.restaurantRepository.allTables.find(test => test.id === makeReservation.tableNumber);
    
        if (!table) {
            throw new HttpException(
                `Table not found!`,
                HttpStatus.NOT_FOUND,
            );
        } else {
            if (table.status === 'Available') {
                if (makeReservation.peopleNumber <= table.max) {
                    this.restaurantRepository.reservations.push(makeReservation);
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