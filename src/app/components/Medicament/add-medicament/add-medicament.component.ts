import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Medicament } from 'src/app/model/Medicament';
import { MedicamentService } from 'src/app/_services/medicament.service';

@Component({
  selector: 'app-add-medicament',
  templateUrl: './add-medicament.component.html',
  styleUrls: ['./add-medicament.component.css']
})
export class AddMedicamentComponent implements OnInit {

  medicament: Medicament = new Medicament();
  constructor(public dialogRef: MatDialogRef<AddMedicamentComponent>,private medicamentService:MedicamentService , private router:Router) { }

  ngOnInit(): void {
  }
  saveMedicament(){
    this.medicamentService.addMedicament(this.medicament).subscribe( data =>{
        console.log(data);

        this.goToMedicamentList();
        this.reloadPage();
      },
      error => console.log(error));
  }
  goToMedicamentList(){
    this.router.navigate(['/listMedicament']);
  }
  onSubmit(){
    console.log(this.medicament);
    this.saveMedicament();
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
