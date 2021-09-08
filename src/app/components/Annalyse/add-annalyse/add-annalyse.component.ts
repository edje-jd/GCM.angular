import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Annalyse } from 'src/app/model/Annalyse';
import { AnnalyseV } from 'src/app/model/AnnlyseV';
import { Visite } from 'src/app/model/Visite';
import { VisitePM } from 'src/app/model/VisitePM';
import { AnnalyseServiceService } from 'src/app/_services/annalyse-service.service';
import { AnnalyseVService } from 'src/app/_services/annalyse-v.service';
import { VisitePMService } from 'src/app/_services/visite-pm.service';
import { VisiteService } from 'src/app/_services/visite.service';

@Component({
  selector: 'app-add-annalyse',
  templateUrl: './add-annalyse.component.html',
  styleUrls: ['./add-annalyse.component.css']
})
export class AddAnnalyseComponent implements OnInit {
  annalyseV: AnnalyseV = new AnnalyseV();
  visitePM!:VisitePM;
  visitepms!:VisitePM[];
  visite!:Visite;
  addAnls = this.fb.group({
    dateAnls: null,
    nomAnls: [null, Validators.required], 
    nom_labo: [null, Validators.required]
    
    
   
  });
  constructor(private fb:FormBuilder,public dialogRef: MatDialogRef<AddAnnalyseComponent>,private visitepmservice:VisitePMService,private annalyseVService:AnnalyseVService , private router:Router,private visiteService:VisiteService) { 
    this.visitePM = history.state
    this.annalyseV.annalyse= new Annalyse();
  }

  ngOnInit(): void {
    this.getlistVisitePMs();
  }
  saveAnnalyse(){
    this.annalyseV.annalyse.dateAnls = this.addAnls.controls.dateAnls.value;
    this.annalyseV.annalyse.nomAnls = this.addAnls.controls.nomAnls.value;
    this.annalyseV.annalyse.nom_labo = this.addAnls.controls.nom_labo.value;
    console.log("enchewv",this.annalyseV);
    this.annalyseVService.addAnnalyseV(this.annalyseV).subscribe( data =>{
        console.log(data);

        this. AnalyseDetails(this.annalyseV);
      },
      error => console.log(error));
  }
  AnalyseDetails(analysev:AnnalyseV){
    this.router.navigate(['annalyse-detail'],{state:analysev});
  }
  goToAnnalyseList(){
    this.router.navigate(['/listAnnalyse']);
  }
  getlistVisitePMs(){
    this.visitepmservice.getVisitePMList().subscribe(data=>{
    this.visitepms=data;
    })
     }
  onSubmit(){
    
    

    if(this.addAnls.status === "VALID"){
      this.annalyseV.visitePM=this.visitePM;
      this.saveAnnalyse();;
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
