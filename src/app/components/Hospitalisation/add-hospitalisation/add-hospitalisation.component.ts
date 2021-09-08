import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  addHosp = this.fb.group({
    date_debut_hosp: [null, Validators.required],
    date_fin_hosp: [null, Validators.required], 
    nomUnite: [null, Validators.required], 
    numChambre:[null, Validators.required], 
    numLit: [null, Validators.required],
    traitement: null, 
   
   
  });
  constructor(private fb:FormBuilder,public dialogRef: MatDialogRef<AddHospitalisationComponent>,private visitepmservice:VisitePMService,private hospitalisationVService:HospitalisationVService,private router: Router,private visiteService:VisiteService) {
    this.visitepm = history.state
    this.hospitalisationV.hospitalisation=new Hospitalisation();
   }

  ngOnInit(): void {
    
    this.getlistVisitePMs();
  }

  saveHospitalisation(){

    this.hospitalisationV.hospitalisation.date_debut_hosp = this.addHosp.controls.date_debut_hosp.value;
    this.hospitalisationV.hospitalisation.date_fin_hosp = this.addHosp.controls.date_fin_hosp.value;
    this.hospitalisationV.hospitalisation.nomUnite = this.addHosp.controls.nomUnite.value;
    this.hospitalisationV.hospitalisation.numChambre = this.addHosp.controls.numChambre.value;
    this.hospitalisationV.hospitalisation.numLit= this.addHosp.controls.numLit.value;
    this.hospitalisationV.hospitalisation.traitement = this.addHosp.controls.traitement.value;

    console.log("enchewvou 4e",this.hospitalisationV);
    this.hospitalisationVService.addHospitalisationV(this.hospitalisationV).subscribe( data =>{
      console.log(data);

        this.HospitalisationDetails(this.hospitalisationV);
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

     HospitalisationDetails(hospitalisationV:HospitalisationV){
      this.router.navigate(['details-hospitalisation'],{state:hospitalisationV});
    }
  onSubmit(){
    if(this.addHosp.status === "VALID"){
      this.hospitalisationV.visitePM=this.visitepm;
      this.saveHospitalisation();
      this.dialogRef.close();
    } ;
    
    
    
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
