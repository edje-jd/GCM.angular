import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Medecin } from 'src/app/model/Medecin';
import { MedecinPH } from 'src/app/model/MedecinPH';
import { patient } from 'src/app/model/Patient';
import { Secretaire } from 'src/app/model/Secretaire';
import { Visite } from 'src/app/model/Visite';
import { VisitePM } from 'src/app/model/VisitePM';
import { MedecinPHService } from 'src/app/_services/medecin-ph.service';
import { MedecinService } from 'src/app/_services/medecin.service';
import { PatientService } from 'src/app/_services/patient.service';
import { SecretaireService } from 'src/app/_services/secretaire.service';
import { VisitePMService } from 'src/app/_services/visite-pm.service';
import { VisiteService } from 'src/app/_services/visite.service';

@Component({
  selector: 'app-add-visite',
  templateUrl: './add-visite.component.html',
  styleUrls: ['./add-visite.component.css']
})
export class AddVisiteComponent implements OnInit {
  visitepm: VisitePM = new VisitePM();
  patients?:patient[];
  patient!:patient;
  medecinphs?:MedecinPH[];
  medecinph!:MedecinPH;
  secretaires?:Secretaire[];
  secretaire?:Secretaire;
  id?:any;
  options = ['Consultation','Rend-Vous'];
//   form = new FormGroup({
//     type_visite : new FormControl('',Validators.required),
//     date_visit :new FormControl('',Validators.required),
//     visitepm: new FormControl('',Validators.required)
//  })
  constructor(private visitepmservice:VisitePMService,private visiteService:VisiteService,private patientservice: PatientService,private router: Router ,private medecinphservice:MedecinPHService,private secretaireService:SecretaireService) {
    this.patient = history.state
    
    this.visitepm.visite = new Visite();
   }

  ngOnInit(): void {
    this. getlistPatients();
    this.getlistMedecinPHs();
   
  }

  saveVisite(){
    this.visitepmservice.addVisitePM(this.visitepm).subscribe( data =>{
      console.log(this.visitepm.patient)
      console.log(this.visitepm.medecinPH)
        console.log(data);

        this.detalVisite(this.visitepm)

        // this.goToVisiteList();
      },
      error => console.log(error));
  }

  changeVisit() {
    console.log("selecting " + this.visitepm.visite.type_visite)
    if( this.visitepm.visite.type_visite === "VC") {
      this.visitepm.visite.date_der_con = undefined
    } else {
      this.visitepm.visite.prix_cons = 0
    }
  }
  detalVisite(visitepm:VisitePM){
    this.router.navigate(['visiteDetails'], {state: visitepm});
  }
  goToVisiteList(){
    this.router.navigate(['/listVisite']);
  }
  getlistPatients(){
    this.patientservice.getPatientList().subscribe(data=>{
    this.patients=data;
    })
     }

 getlistMedecinPHs(){
      this.medecinphservice.getMedecinPhList().subscribe(data=>{
      this.medecinphs=data;
      })
 }
 getlistSecretaires(){
  this.secretaireService.getSecretaireList().subscribe(data=>{
  this.secretaires=data;
  })
}

  onSubmit(){
   this.visitepm.patient = this.patient;
   console.log(this.visitepm.medecinPH);
   
    // this.visitepm.medecinph= this.medecinph
    // this.visitepm.visite=this.visite
    
    

    
    // this.visitepm.secretaire= this.secretaire
    this.saveVisite();
  }

  Retour(){
    window.history.back();
  }
}
