import { Medecin } from "./Medecin";
import { patient } from "./Patient";
import { Secretaire } from "./Secretaire";

export class Visite{
    
    id!:number ;
   
    date_visit!: Date ;
    objet_visit!:string;
    type_visite!:string;
    prix_cons: number = 0;
    date_der_con:Date | undefined = undefined;
    effectue:boolean=false;
    
}