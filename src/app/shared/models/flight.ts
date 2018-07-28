import { Ticket } from './ticket';

export {  Ticket  } from './ticket'

export interface Flight {
    id: number,
    number: string,
    departurePoint: string,
    departureTime: string,
    destination: string,
    destinationTime: string,
    tickets: number[];
}