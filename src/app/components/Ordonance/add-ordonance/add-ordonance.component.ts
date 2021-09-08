import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Medicament } from 'src/app/model/Medicament';
import { Ordonance } from 'src/app/model/Ordonance';
import { OrdonanceMV } from 'src/app/model/OrdonanceMV';
import { Visite } from 'src/app/model/Visite';
import { VisitePM } from 'src/app/model/VisitePM';
import { MedicamentService } from 'src/app/_services/medicament.service';
import { OrdonanceMVService } from 'src/app/_services/ordonance-mv.service';
import { OrdonanceService } from 'src/app/_services/ordonance.service';
import { VisitePMService } from 'src/app/_services/visite-pm.service';
import { VisiteService } from 'src/app/_services/visite.service';

@Component({
  selector: 'app-add-ordonance',
  templateUrl: './add-ordonance.component.html',
  styleUrls: ['./add-ordonance.component.css']
})
export class AddOrdonanceComponent implements OnInit {

 
  ordonancemv:OrdonanceMV = new OrdonanceMV();
  visitepm!:VisitePM;
  visitepms!:VisitePM[];
  visite!:Visite;
  medicaments!:Medicament[];
  medicament!:Medicament;
  id?:any;
  ordonnance:any;
  addOrd = this.fb.group({
    date_ord: null,
    medicament: [null, Validators.required], 
    dosage: [null, Validators.required],
    datePrdv: [null, Validators.required],
    
   
  });
  constructor(private fb: FormBuilder,private ordonanceMVService:OrdonanceMVService,public dialogRef: MatDialogRef<AddOrdonanceComponent>,private visitepmservice:VisitePMService,private ordonancemvservice:OrdonanceMVService,private ordonanceService: OrdonanceService,private router: Router,private visiteService:VisiteService,private medicamentService:MedicamentService) {
    this.visitepm = history.state
    this.ordonancemv.ordonance=new Ordonance();
   }

  ngOnInit(): void {
    this.ordonanceMVService.getOrdonanceMVList().subscribe(data => {
      this.ordonnance= new MatTableDataSource<OrdonanceMV>(data.filter(_ordonnance =>  _ordonnance.visitepm.patient.name==this.visitepm.patient.name));
    });
    this.getlistMedicaments();
    this.getlistVisitePMs();
  }

  saveOrdonance(){
    this.ordonancemv.ordonance.date_ord = this.addOrd.controls.date_ord.value;
    this.ordonancemv.medicament = this.addOrd.controls.medicament.value;
    this.ordonancemv.ordonance.dosage = this.addOrd.controls.dosage.value;
    this.ordonancemv.ordonance.datePrdv = this.addOrd.controls.datePrdv.value;
    console.log("chew4e",this.ordonancemv);
    this.ordonancemvservice.addOrdonanceMV(this.ordonancemv).subscribe( data =>{
      console.log(data);

      this.ordoranceDetails(this.ordonancemv);
      },
      error => console.log(error));
  }
  goToOrdonanceList(){
    this.router.navigate(['/listOrdonance']);
  }
  goToDossierPatient(){
    this.router.navigate(['/Dosier-Detail']);
  }
  getlistVisitePMs(){
    this.visitepmservice.getVisitePMList().subscribe(data=>{
    this.visitepms=data;
    })
     }

 getlistMedicaments(){
      this.medicamentService.getMedicamentList().subscribe(data=>{
      this.medicaments=data;
      })
       }
       ordoranceDetails(ordonancemv:OrdonanceMV){
        this.router.navigate(['ordonance-details'],{state:ordonancemv});
      }
  onSubmit(){
   
    
    
    
    if(this.addOrd.status === "VALID"){
      this.ordonancemv.visitepm=this.visitepm;
      this.saveOrdonance();
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
