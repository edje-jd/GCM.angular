import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Antecedent } from 'src/app/model/Antecedent';
import { Localisation } from 'src/app/model/Localisation';
import { patient } from 'src/app/model/Patient';
import { PatientDesease } from 'src/app/model/PatientDesease';
import { AntecedentService } from 'src/app/_services/antecedent.service';
import { LocalisationService } from 'src/app/_services/localisation.service';
import { PatientDeseaseService } from 'src/app/_services/patient-desease.service';
import { PatientService } from 'src/app/_services/patient.service';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.css']
})
export class ListPatientComponent implements OnInit {
  patientsDeseases!: PatientDesease[];
  patientDes!:PatientDesease;
  patients!:patient[];
  Patient!:patient
  id: any;
  i:any;
  antecedent!: Antecedent;
  antecedents?:Antecedent[];
  localisations?: Localisation[];
  localisation?: Localisation;
  Name!: string;
  p:number=1;

  
  constructor(private patientservice: PatientService, private patientDeseaseservice: PatientDeseaseService, private route: ActivatedRoute ,private router: Router,private antecedentService:AntecedentService,private localisationService:LocalisationService) { }
 
  ngOnInit(): void {
    this.patientsDeseases;
    this.getPatientsD()
    this.i=this.route.snapshot.params['i'];
    this.antecedent=new Antecedent()
    this.localisation=new Localisation()
    this.localisationService.getLocalisationById(this.i).subscribe(dta=> {
      this.localisation=dta;});  
  }
  private getPatientsD(){
    this.patientDeseaseservice.getPatientDeseaseList().subscribe(data => {
      console.log(this.patientsDeseases)
      this.patientsDeseases=data;
    });
  }

  private getPatients(){
    this.patientservice.getPatientList().subscribe(data => {
      console.log(this.patientsDeseases)
      this.patients = data;
    });

}

PatientDetails(patientdes: PatientDesease){
  this.router.navigate(['patient-details'],{state:patientdes});
}

updatePatient(patient: patient){
  this.router.navigate(['updatePatient'], {state:patient});
}
DemandeVisite(patient:patient){
  this.router.navigate(['addVisite'], {state: patient});
}

deletePatientDesease(id: any){
  this.patientDeseaseservice.deletePatientDesease(id).subscribe( data => {
    console.log(data);
    this.getPatientsD();
  })
}



   public Search(key: string): void {
    console.log(key);
    const results: PatientDesease[] = [];
    for (const patientDes of this.patientsDeseases) {
      if (patientDes.patient.name?.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || patientDes.patient.phone?.toLowerCase().indexOf(key.toLowerCase()) !== -1
       ) {
        results.push(patientDes);
      }
    }
    this.patientsDeseases = results;
    if (results.length === 0 || !key) {
      this.getPatientsD();
    }
  }

 

}