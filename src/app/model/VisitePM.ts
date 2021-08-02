
import { Medecin } from "./Medecin";
import { MedecinPH } from "./MedecinPH";
import { patient } from "./Patient";
import { Visite } from "./Visite";

export class VisitePM{
    id?:number;
    visite!:Visite;
   
    patient !: patient;
    medecinPH!: MedecinPH;

} 