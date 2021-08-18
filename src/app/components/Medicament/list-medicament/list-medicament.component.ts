import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicament } from 'src/app/model/Medicament';
import { MedicamentService } from 'src/app/_services/medicament.service';
import { AddMedecinComponent } from '../../Medecin/add-medecin/add-medecin.component';
import { AddMedicamentComponent } from '../add-medicament/add-medicament.component';

@Component({
  selector: 'app-list-medicament',
  templateUrl: './list-medicament.component.html',
  styleUrls: ['./list-medicament.component.css']
})
export class ListMedicamentComponent implements OnInit {

  medicaments!: Medicament[];
  id: any;
  i:any;
  displayedColumns: string[] = ['id', 'typeMedc', 'nomMedc', 'Actions'];
  constructor(private dialog:MatDialog,private medicamentService:MedicamentService, private route: ActivatedRoute ,private router: Router) { }

  ngOnInit(): void {
    this.getMedicaments();
    this.i=this.route.snapshot.params['i'];
  }

  private getMedicaments(){
    this.medicamentService.getMedicamentList().subscribe(data => {
      this.medicaments = data;
    });

}


updateMedicament(medicament: Medicament){
  this.router.navigate(['update-medicament'] , {state:medicament});
}

deleteMedicament(id: any){
  this.medicamentService.deleteMedicament(id).subscribe( data => {
    console.log(data);
    this.getMedicaments();
  })
}
public Search(key: string): void {
  console.log(key);
  const results: Medicament[] = [];
  for (const medicament of this.medicaments) {
    if (medicament.nomMedc?.toLowerCase().indexOf(key.toLowerCase()) !== -1
    || medicament.typeMedc?.toLowerCase().indexOf(key.toLowerCase()) !== -1
     ) {
      results.push(medicament);
    }
  }this.medicaments = results;
  if (results.length === 0 || !key) {
    this.getMedicaments();
  }
}

addMdc(){
  // this.service.initializeFormGroup();
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = "60%";
  this.dialog.open(AddMedicamentComponent,dialogConfig);

}



}
