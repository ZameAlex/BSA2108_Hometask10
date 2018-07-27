import { Crew } from "./crew";
import { Plane } from "./plane";

export interface Departure  {
    id: number,
    flight: string,
    date: string,
    crew: Crew,
    plane: Plane,
}