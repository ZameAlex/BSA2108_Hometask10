import { Crew } from "./crew";
import { Plane } from "./plane";

export interface Departure  {
    id: number,
    number: string,
    date: string,
    crew: number,
    plane: number,
}