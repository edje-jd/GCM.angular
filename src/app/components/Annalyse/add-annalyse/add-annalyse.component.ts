import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  form = new FormGroup({
    nomAnls : new FormControl('',Validators.required),
    nom_labo :new FormControl('',Validators.required)
 })
  constructor(public dialogRef: MatDialogRef<AddAnnalyseComponent>,private visitepmservice:VisitePMService,private annalyseVService:AnnalyseVService , private router:Router,private visiteService:VisiteService) { 
    this.visitePM = history.state
    this.annalyseV.annalyse= new Annalyse();
  }

  ngOnInit(): void {
    this.getlistVisitePMs();
  }
  saveAnnalyse(){
    this.annalyseVService.addAnnalyseV(this.annalyseV).subscribe( data =>{
        console.log(data);

        this.goToAnnalyseList();
      },
      error => console.log(error));
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
    this.annalyseV.visitePM=this.visitePM;
    this.saveAnnalyse();
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
