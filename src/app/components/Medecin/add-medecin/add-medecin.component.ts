import { Component, OnInit } from '@angular/core';
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

  medecin: Medecin = new Medecin();
  medecinPh:MedecinPH =new MedecinPH();
  phoraires?:Phoraire[];
  phoraire!:Phoraire;
  id?:any;
  constructor(public dialogRef: MatDialogRef<AddMedecinComponent>,private medecinPhService:MedecinPHService, private medecinservice: MedecinService,private router: Router ,private phoraireService:PhoraireService) { }

  ngOnInit(): void {
    this.getlistPhoraires()
  }

  saveMedecin(){
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
