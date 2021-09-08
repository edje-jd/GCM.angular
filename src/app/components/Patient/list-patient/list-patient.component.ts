import { state } from '@angular/animations';
import { OnDestroy } from '@angular/core';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Antecedent } from 'src/app/model/Antecedent';
import { Localisation } from 'src/app/model/Localisation';
import { patient } from 'src/app/model/Patient';
import { PatientDesease } from 'src/app/model/PatientDesease';
import { AntecedentService } from 'src/app/_services/antecedent.service';
import { LocalisationService } from 'src/app/_services/localisation.service';
import { PatientDeseaseService } from 'src/app/_services/patient-desease.service';
import { PatientService } from 'src/app/_services/patient.service';
import { AddPatientComponent } from '../add-patient/add-patient.component';
import { UpdatePatientComponent } from '../update-patient/update-patient.component';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.css']
})
export class ListPatientComponent implements OnInit,OnDestroy{
  patientsDeseases: PatientDesease[] = [];
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

  
  dataSource!: any;

  
  constructor(private dialog1:MatDialog,private dialog:MatDialog,private patientservice: PatientService, private patientDeseaseservice: PatientDeseaseService, private route: ActivatedRoute ,private router: Router,private antecedentService:AntecedentService,private localisationService:LocalisationService) { }
  
  
  
  
  displayedColumns: string[] = ['Id', 'name', 'phone', 'age','sexe','adresse','Actions'];
  

  subscribe!:Subscription;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  

  
  
  ngOnInit(): void {
   this.subscribe= this.patientservice.getPatientList().subscribe(data => {
      this.dataSource= new MatTableDataSource<patient>(data);
      this.dataSource.paginator= this.paginator;
      this.dataSource.sort= this.sort;
    });
  
    
    
    this.getPatients();

    
    console.log(this.dataSource)

    this.i=this.route.snapshot.params['i'];
    this.antecedent=new Antecedent()
    this.localisation=new Localisation()
    this.localisationService.getLocalisationById(this.i).subscribe(dta=> {
      this.localisation=dta;});  

      
  }
  ngOnDestroy(): void {
    this.subscribe.unsubscribe;
  }
  private getPatientsD(){
    this.patientDeseaseservice.getPatientDeseaseList().subscribe(data => {
      this.patientsDeseases=data;
      console.log(this.patientsDeseases)
    });
  }

  private getPatients(){
    this.patientservice.getPatientList().subscribe(data => {
      console.log(this.patientsDeseases)
      this.patients = data;
    });

}

PatientDetails(Patient: patient){
  this.router.navigate(['patient-details'],{state:Patient});
}

updatePatient(Patient: patient){
  this.router.navigate(['updatePatient'], {state:Patient});
}
DemandeVisite(Patient:patient){
  this.router.navigate(['addVisite'], {state: Patient});
  
}

deletePatientDesease(id: any){
  this.patientservice.deletePatient(id).subscribe( data => {
    console.log(data);
    this.reloadPage();
  })
}
openUtil(){
  // this.service.initializeFormGroup();
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = "600px";
  dialogConfig.height= "500px";
  
  this.dialog.open(AddPatientComponent,dialogConfig);
  // this.dialog.open(AddPatientComponent, {
  //   height: '600px',
  //   width: '700px',
    
  // });
}
// UpdatePatient(Patient:patient){
//   // this.service.initializeFormGroup();
//   const dialogConfig = new MatDialogConfig();
//   dialogConfig.disableClose = true;
//   dialogConfig.autoFocus = true;
//   dialogConfig.width = "600px";
//   dialogConfig.height= "500px";
//   dialogConfig.data = {patient: this.dataSource.Patient}
//   this.dialog1.open(UpdatePatientComponent,dialogConfig);
//   // this.dialog.open(AddPatientComponent, {
//   //   height: '600px',
//   //   width: '700px',
    
//   // });
// }
findPatientByName(name:HTMLInputElement){
  this.applyFilter(name.value);

}
applyFilter(filterValue:string){
  filterValue= filterValue.trim();
  filterValue= filterValue.toLocaleLowerCase();
  this.dataSource.filter = filterValue;
}
reloadPage(): void {
  window.location.reload();
}


   

  // @ViewChild(MatPaginator) 
  // paginator!: MatPaginator;
  

  // ngAfterViewInit() {
  //   this.patientsDeseases.paginator = this.paginator;
  // }

 
}

