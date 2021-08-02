import { Visite } from "./Visite";

export class Hospitalisation{
  id ?:number;
  date_debut_hosp?:Date ;
	 date_fin_hosp?:Date ;
	 numLit?:number ;
	numChambre?:number;
	 nomUnite?: string ;
  traitement?: string;
}