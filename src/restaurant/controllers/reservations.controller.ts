import { Body, Controller, Get, Post } from "@nestjs/common";
import { Reservation } from "../entities/reservation.entity";
import { ReservationsService } from "../services/reservations.service";

@Controller('reserve')
export class ReservantionsController {
    constructor(private readonly reservationstService: ReservationsService) {}

    @Get('listReservations')
    listReservations() {
        return this.reservationstService.listReservations();
    }

    @Post('reserveTable')
    makeReservation(@Body() makeReservation: Reservation) {
        return this.reservationstService.makeReservation(makeReservation);
    }
}