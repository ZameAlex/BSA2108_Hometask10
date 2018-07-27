import { Pilot } from "./pilot";
import { Stewardess } from "./stewardess";

export interface Crew   {
    id: number,
    pilot: Pilot,
    stewardess: Stewardess[]
}