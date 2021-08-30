import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Localisation } from 'src/app/model/Localisation';
import { LocalisationService } from 'src/app/_services/localisation.service';

@Component({
  selector: 'app-add-localisation',
  templateUrl: './add-localisation.component.html',
  styleUrls: ['./add-localisation.component.css']
})
export class AddLocalisationComponent implements OnInit {
localisation: Localisation = new Localisation();
  constructor(public dialogRef: MatDialogRef<AddLocalisationComponent>,private localisationService:LocalisationService , private router:Router) { }

  ngOnInit(): void {
  }
  saveLocalisation(){
    this.localisationService.addLocalisation(this.localisation).subscribe( data =>{
        console.log(data);

        this.goToLocalisationList();
        this.reloadPage();
      },
      error => console.log(error));
  }
  goToLocalisationList(){
    this.router.navigate(['/listLocalisation']);
  }
  onSubmit(){
    console.log(this.localisation);
    this.saveLocalisation();
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
