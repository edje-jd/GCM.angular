import { AnnalyseV } from "./AnnlyseV";
import { HospitalisationV } from "./HospitalisationV";
import { OrdonanceMV } from "./OrdonanceMV";
import { VisitePM } from "./VisitePM";

export class DossierPatient{
    visitepm!: VisitePM;
    ordonancemv!:OrdonanceMV;
    analysemv!:AnnalyseV;
    hospitalisationmv!:HospitalisationV;

}