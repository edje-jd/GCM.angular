import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
  
 addVisite = this.fb.group({
  date_visit: null,
  objet_visit: null, 
  type_visite: [null, Validators.required],
  prix_cons: null, 
  date_der_con: null,
  effectue: null, 
  medecinPH: [null, Validators.required]
 
});

Consultation!:any;


  constructor( @Inject(MAT_DIALOG_DATA) public data: {patient: patient}, public dialogRef: MatDialogRef<AddVisiteComponent>,private fb: FormBuilder,private visitepmservice:VisitePMService,private visiteService:VisiteService,private patientservice: PatientService,private router: Router ,private medecinphservice:MedecinPHService,private secretaireService:SecretaireService) {
    this.visitepm.patient = this.data.patient;
    console.log("patient: ", this.visitepm.patient)
    
    this.visitepm.visite = new Visite();
   }

  ngOnInit(): void {
    this. getlistPatients();
    this.getlistMedecinPHs();
   
  }

  saveVisite(){
    this.visitepm.visite.date_visit = this.addVisite.controls.date_visit.value;
    this.visitepm.visite.objet_visit = this.addVisite.controls.objet_visit.value;
    this.visitepm.visite.type_visite = this.addVisite.controls.type_visite.value;
    this.visitepm.visite.prix_cons = this.addVisite.controls.prix_cons.value;
    this.visitepm.visite.date_der_con = this.addVisite.controls.date_der_con.value;
    this.visitepm.visite.effectue = this.addVisite.controls.effectue.value;
    this.visitepm.medecinPH = this.addVisite.controls.medecinPH.value;
    console.log("chewv 4e",this.visitepm);
    
    this.visitepmservice.addVisitePM(this.visitepm).subscribe( data =>{
      
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
// onSubmit(): void {
//   alert('Thanks!');
// }

  onSubmit(){
    if(this.addVisite.status === "VALID"){
      this.saveVisite();
      this.dialogRef.close();
    } ;
  }

  Retour(){
    window.history.back();
  }
  onClose() {
  
    this.dialogRef.close();
  }
}
