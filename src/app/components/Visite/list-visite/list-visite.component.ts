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
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { VisitePMService } from 'src/app/_services/visite-pm.service';
import { VisiteService } from 'src/app/_services/visite.service';

@Component({
  selector: 'app-list-visite',
  templateUrl: './list-visite.component.html',
  styleUrls: ['./list-visite.component.css']
})
export class ListVisiteComponent implements OnInit {
  visitepms!:VisitePM[];
  visite!: Visite[];
  id: any;
  i:any;
  patient?: patient;
  patients?:patient[];
  medecins?: Medecin[];
  medecin?: Medecin;
  secretaires?:Secretaire[];
  secretaire?:Secretaire;

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  constructor(private visitepmservice :VisitePMService,private tokenStorageService: TokenStorageService,private patientservice: PatientService, private route: ActivatedRoute ,private router: Router,private visiteService:VisiteService,private medecinService:MedecinService,private secretaireService:SecretaireService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;}

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

detalVisite(visitepm:VisitePM){
  this.router.navigate(['visiteDetails'], {state: visitepm});
}
 
updateVisite(visite: Visite){
  this.router.navigate(['update-visite'],{state:visite});
}
public Search(key: string): void {
  console.log(key);
  const results: VisitePM[] = [];
  for (const visitepm of this.visitepms) {
    if (visitepm.patient.name?.toLowerCase().indexOf(key.toLowerCase()) !== -1
    || visitepm.medecinPH.medecin.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
    || visitepm.visite.type_visite.toLowerCase().indexOf(key.toLowerCase()) !== -1
     ) {
      results.push(visitepm);
    }
  }
  this.visitepms = results;
  if (results.length === 0 || !key) {
    this.getVisitePMs();
  }
}

deleteVisite(id: any){
  this.visitepmservice.deleteVisitePM(id).subscribe( data => {
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
