import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Phoraire } from 'src/app/model/Phoraire';
import { PhoraireService } from 'src/app/_services/phoraire.service';

@Component({
  selector: 'app-add-phoraire',
  templateUrl: './add-phoraire.component.html',
  styleUrls: ['./add-phoraire.component.css']
})
export class AddPhoraireComponent implements OnInit {
phoraire:Phoraire= new Phoraire();

  constructor(public dialogRef: MatDialogRef<AddPhoraireComponent>,private phoraireService:PhoraireService , private router:Router) { }

  ngOnInit(): void {
  }
  savePhoraire(){
    this.phoraireService.addPhoraire(this.phoraire).subscribe( data =>{
        console.log(data);

        this.goToPhoraireList();
        this.reloadPage();
      },
      error => console.log(error))
  }
  goToPhoraireList(){
    this.router.navigate(['/listPhoraire']);
  }
  onSubmit(){
    console.log(this.phoraire);
    this.savePhoraire();
  }
  
  onClose() {
    // this.service.form.reset();
    // this.service.initializeFormGroup();
    this.dialogRef.close();
  }

  reloadPage(): void {
    window.location.reload();
  }


}


