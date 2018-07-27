import { Ticket } from './ticket';

export {  Ticket  } from './ticket'

export interface Flight {
    id: number,
    number: number,
    departurePoint: string,
    departureTime: string,
    destination: string,
    destinationTime: string,
    tickets: Ticket[];
}