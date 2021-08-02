import { Antecedent } from "./Antecedent";
import { Localisation } from "./Localisation";
import { patient } from "./Patient";

export class PatientDesease{
    id?: number;
    antcedent!:Antecedent;
    patient!:patient;
    localisation!:Localisation;
    
}