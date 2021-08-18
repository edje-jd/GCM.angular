import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Hospitalisation } from 'src/app/model/Hospitalisation';
import { HospitalisationV } from 'src/app/model/HospitalisationV';
import { Visite } from 'src/app/model/Visite';
import { VisitePM } from 'src/app/model/VisitePM';
import { HospitalisationVService } from 'src/app/_services/hospitalisation-v.service';
import { VisitePMService } from 'src/app/_services/visite-pm.service';
import { VisiteService } from 'src/app/_services/visite.service';

@Component({
  selector: 'app-add-hospitalisation',
  templateUrl: './add-hospitalisation.component.html',
  styleUrls: ['./add-hospitalisation.component.css']
})
export class AddHospitalisationComponent implements OnInit {

 
  hospitalisationV:HospitalisationV = new HospitalisationV ();
  visitepm!:VisitePM;
  visitepms!:VisitePM[];
  visite!:Visite ;
 
  id?:any;
  form = new FormGroup({
    nomUnite : new FormControl('',Validators.required),
    traitement :new FormControl('',Validators.required)
 })
  constructor(public dialogRef: MatDialogRef<AddHospitalisationComponent>,private visitepmservice:VisitePMService,private hospitalisationVService:HospitalisationVService,private router: Router,private visiteService:VisiteService) {
    this.visitepm = history.state
    this.hospitalisationV.hospitalisation=new Hospitalisation();
   }

  ngOnInit(): void {
    
    this.getlistVisitePMs();
  }

  saveHospitalisation(){
    this.hospitalisationVService.addHospitalisationV(this.hospitalisationV).subscribe( data =>{
      console.log(data);

        this.goToOrdonanceList();
      },
      error => console.log(error));
  }
  goToOrdonanceList(){
    this.router.navigate(['/listHospitalisation']);
  }
  getlistVisitePMs(){
    this.visitepmservice.getVisitePMList().subscribe(data=>{
    this.visitepms=data;
    })
     }


  onSubmit(){
    // this.ordonancemv.medicament=this.medicament;
    // this.ordonancemv.ordonance=this.ordonance;
    this.hospitalisationV.visitePM=this.visitepm;
    
    this.saveHospitalisation();
  }
  Retour(){
    window.history.back();
  }
  onClose() {
    // this.service.form.reset();
    // this.service.initializeFormGroup();
    this.dialogRef.close();
  }

}
