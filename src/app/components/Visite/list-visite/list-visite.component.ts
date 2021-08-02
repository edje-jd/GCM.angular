import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medecin } from 'src/app/model/Medecin';
import { patient } from 'src/app/model/Patient';
import { Secretaire } from 'src/app/model/Secretaire';
import { Visite } from 'src/app/model/Visite';
import { VisitePM } from 'src/app/model/VisitePM';
import { MedecinService } from 'src/app/_services/medecin.service';
import { PatientService } from 'src/app/_services/patient.service';
import { SecretaireService } from 'src/app/_services/secretaire.service';
import { VisitePMService } from 'src/app/_services/visite-pm.service';
import { VisiteService } from 'src/app/_services/visite.service';

@Component({
  selector: 'app-list-visite',
  templateUrl: './list-visite.component.html',
  styleUrls: ['./list-visite.component.css']
})
export class ListVisiteComponent implements OnInit {
  visitepms?:VisitePM[];
  visite!: Visite[];
  id: any;
  i:any;
  patient?: patient;
  patients?:patient[];
  medecins?: Medecin[];
  medecin?: Medecin;
  secretaires?:Secretaire[];
  secretaire?:Secretaire;
  constructor(private visitepmservice :VisitePMService,private patientservice: PatientService, private route: ActivatedRoute ,private router: Router,private visiteService:VisiteService,private medecinService:MedecinService,private secretaireService:SecretaireService) { }

  ngOnInit(): void {
    this.getVisitePMs();
    this.i=this.route.snapshot.params['i'];
    this.patient=new patient()
    this.patientservice.getPatientById(this.i).subscribe(dta=> {
      this.patient=dta;});
    this.medecin=new Medecin()
    this.medecinService.getMedecinById(this.i).subscribe(dta=> {
      this.medecin=dta;}); 
    this.secretaire=new Secretaire()
    this.secretaireService.getSecretaireById(this.i).subscribe(dta=> {
       this.secretaire=dta;});   
  }

  private getVisitePMs(){
    this.visitepmservice.getVisitePMList().subscribe(data => {
      this.visitepms = data;
    });

}
DemandeOrdonance(visitepm:VisitePM){
  this.router.navigate(['addOrdonance'], {state: visitepm});
}
DemandeHospitalisation(visitePM:VisitePM){
  this.router.navigate(['addHospitalisation'], {state: visitePM});
}
detalVisite(visitepm:VisitePM){
  this.router.navigate(['visiteDetails'], {state: visitepm});
}
DemandeAnnalyse(visitePM:VisitePM){
  this.router.navigate(['addAnnalyse'], {state: visitePM});
}
updateVisite(id: any){
  this.router.navigate(['update-visite', id]);
}

deleteVisite(id: any){
  this.visiteService.deleteVisite(id).subscribe( data => {
    console.log(data);
    this.getVisitePMs();
  })
}

getPatientbyId(id:number){
  this.patientservice.getPatientById(id).subscribe(data=>{
  this.patient=data;
  })


}
VisiteDetails(id: any){
  this.router.navigate(['visite-details']);
}


getMedecinbyId(id:number){
  this.medecinService.getMedecinById(id).subscribe(data=>{
  this.medecin=data;
  })
}
getSecretairebyId(id:number){
  this.secretaireService.getSecretaireById(id).subscribe(data=>{
  this.secretaire=data;
  })
   }  

}
