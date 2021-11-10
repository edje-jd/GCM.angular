import { Medicament } from "./Medicament";
import { Ordonance } from "./Ordonance";
import { Visite } from "./Visite";
import { VisitePM } from "./VisitePM";

export class OrdonanceMV{
    id!:number;
    medicament!:Medicament[];
    ordonance!:Ordonance;
    visitepm!:VisitePM
}