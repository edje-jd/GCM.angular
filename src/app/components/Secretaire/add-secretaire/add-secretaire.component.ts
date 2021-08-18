import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Secretaire } from 'src/app/model/Secretaire';
import { SecretaireService } from 'src/app/_services/secretaire.service';

@Component({
  selector: 'app-add-secretaire',
  templateUrl: './add-secretaire.component.html',
  styleUrls: ['./add-secretaire.component.css']
})
export class AddSecretaireComponent implements OnInit {

  secretaire: Secretaire= new Secretaire();
  constructor(public dialogRef: MatDialogRef<AddSecretaireComponent>,private secretaireService:SecretaireService , private router:Router) { }

  ngOnInit(): void {
  }
  saveSecretaire(){
    this.secretaireService.addSecretaire(this.secretaire).subscribe( data =>{
        console.log(data);

        this.goToSecretaireList();
        this.reloadPage();
      },
      error => console.log(error));
  }
  goToSecretaireList(){
    this.router.navigate(['/listSecretaire']);
  }
  onSubmit(){
    console.log(this.secretaire);
    this.saveSecretaire();
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
