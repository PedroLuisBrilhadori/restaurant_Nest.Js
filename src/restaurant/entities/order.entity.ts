export class Order {
    id: number;
    dishList: {dish: number; quantity: number} [];
    date: string;
    status?: string;
}