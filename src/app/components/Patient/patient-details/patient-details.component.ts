import { Component, OnInit } from '@angular/core';
import { MatDialog ,MatDialogConfig} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Antecedent } from 'src/app/model/Antecedent';
import { Localisation } from 'src/app/model/Localisation';
import { patient } from 'src/app/model/Patient';
import { PatientDesease } from 'src/app/model/PatientDesease';
import { PatientDeseaseService } from 'src/app/_services/patient-desease.service';
import { PatientService } from 'src/app/_services/patient.service';
import { AddVisiteComponent } from '../../Visite/add-visite/add-visite.component';
import { ExempleComponent } from '../../Visite/exemple/exemple.component';

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

  displayedColumns: string[] = ['Id', 'name', 'phone', 'age','sexe','adresse','antecedent'];
  constructor(private patientdesService :PatientDeseaseService,private router:Router,
    private route: ActivatedRoute,private dialog:MatDialog ,private patientservice:PatientService) {this.patient=history.state;
      
      }
      dataSource!:any;
      
  ngOnInit(): void {
    
    this.patientservice.getPatientList().subscribe(data => {
      this.dataSource= new MatTableDataSource<patient>(data);
     
      
      
      
    });
    

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
openUtil(){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = "45%";
  dialogConfig.height = "65%";
  dialogConfig.data = {patient: this.patient}
  
  this.dialog.open(AddVisiteComponent,dialogConfig);
 
}
Retour(){
  window.history.back();
}
}
