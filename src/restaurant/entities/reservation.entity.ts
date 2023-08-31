export class Reservation {
    id: number;
    tableNumber: number;
    date: string;
    peopleNumber?: number;
}

// import { IsNotEmpty, IsNumber, IsString} from 'class-validator';

// export class Reservation {
//     @IsNotEmpty()
//     @IsNumber()
//     id: number;

//     @IsNotEmpty()
//     @IsNumber()
//     tableNumber: number;

//     @IsNotEmpty()
//     @IsString()
//     date: string;
    
//     @IsNotEmpty()
//     @IsNumber()
//     peopleNumber: number;
// }