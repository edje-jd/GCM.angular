import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Antecedent } from 'src/app/model/Antecedent';
import { Localisation } from 'src/app/model/Localisation';
import { patient } from 'src/app/model/Patient';
import { PatientDesease } from 'src/app/model/PatientDesease';
import { PatientDeseaseService } from 'src/app/_services/patient-desease.service';
import { PatientService } from 'src/app/_services/patient.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
  i: any;
 
  name: any;
  id: any;
  p: number = 1;
  patientd!:PatientDesease;
  patient!:patient;
  patientdes!: PatientDesease [];
  antcedents!:Antecedent[];
  localisations!:Localisation[];
  constructor(private patientdesService :PatientDeseaseService,private router:Router,
    private route: ActivatedRoute) {this.patientd=history.state;
      
      }

  ngOnInit(): void {
    this.getPatientDes();
   

 
 
  }
  DemandeVisite(patient:patient){
    this.router.navigate(['addVisite'], {state: patient});
  }
  private getPatientDes(){
    this.patientdesService.getPatientDeseaseList().subscribe(data => {
      this.patientdes = data;
    });

}
Retour(){
  window.history.back();
}
}
