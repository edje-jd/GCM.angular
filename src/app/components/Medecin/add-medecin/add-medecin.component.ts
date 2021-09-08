import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Medecin } from 'src/app/model/Medecin';
import { MedecinPH } from 'src/app/model/MedecinPH';
import { Phoraire } from 'src/app/model/Phoraire';
import { MedecinPHService } from 'src/app/_services/medecin-ph.service';
import { MedecinService } from 'src/app/_services/medecin.service';
import { PhoraireService } from 'src/app/_services/phoraire.service';

@Component({
  selector: 'app-add-medecin',
  templateUrl: './add-medecin.component.html',
  styleUrls: ['./add-medecin.component.css']
})
export class AddMedecinComponent implements OnInit {

  medecin!:Medecin;
  medecinPh:MedecinPH =new MedecinPH() ;
  phoraires?:Phoraire[];
  phoraire!:Phoraire;
  id?:any;
  addMedc = this.fb.group({
    name:[null, Validators.required],
    specialicite: [null, Validators.required], 
    numPhone: [null, Validators.required],
    email: [null, Validators.required], 
    phoraire: null
    
   
  });
  constructor(private fb:FormBuilder,public dialogRef: MatDialogRef<AddMedecinComponent>,private medecinPhService:MedecinPHService, private medecinservice: MedecinService,private router: Router ,private phoraireService:PhoraireService) { }

  ngOnInit(): void {
    this.getlistPhoraires()
  }

  saveMedecin(){
    
    // this.medecinPh.medecin.name = this.addMedc.controls.name.value;
    // this.medecinPh.medecin.specialicite = this.addMedc.controls.numPhone.value;
    // this.medecinPh.medecin.numPhone = this.addMedc.controls.name.value;
    // this.medecinPh.medecin.email = this.addMedc.controls.email.value;
    // this.medecinPh.plage_Horaire = this.addMedc.controls.phoraire.value;
    // console.log("chewv 4e",this.medecinPh);
    this.medecinPhService.addMedecinPh(this.medecinPh).subscribe( data =>{
        console.log(data);

        this.goToMedecinList();
        this.reloadPage();
      },
      error => console.log(error));
  }
  goToMedecinList(){
    this.router.navigate(['/listMedecin']);
  }
  getlistPhoraires(){
    this.phoraireService.getPhoraireList().subscribe(data=>{
    this.phoraires=data;
    })
     }
  onSubmit(){
    this.medecinPh.plage_Horaire= this.phoraire;
      this.medecinPh.medecin= this.medecin;
      this.saveMedecin();
    // if(this.addMedc.status === "VALID"){
    //   this.medecinPh.plage_Horaire= this.phoraire;
    //   this.medecinPh.medecin= this.medecin;
    //   this.saveMedecin();
    //   this.dialogRef.close();
    // } ;    
  }
  reloadPage(): void {
    window.location.reload();
  }
  onClose() {
    // this.service.form.reset();
    // this.service.initializeFormGroup();
    this.dialogRef.close();
  }
  

}
