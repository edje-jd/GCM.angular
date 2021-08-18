import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Phoraire } from 'src/app/model/Phoraire';
import { PhoraireService } from 'src/app/_services/phoraire.service';
import { AddPhoraireComponent } from '../add-phoraire/add-phoraire.component';

@Component({
  selector: 'app-list-phoraire',
  templateUrl: './list-phoraire.component.html',
  styleUrls: ['./list-phoraire.component.css']
})
export class ListPhoraireComponent implements OnInit {
  phoraires!: Phoraire[];
  id: any;
  i:any;
  displayedColumns: string[] = ['id', 'heure_deb','heure_fin','Actions'];
  constructor(private dialog:MatDialog,private phoraireService:PhoraireService,private router :Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPhoraires();
    this.i=this.route.snapshot.params['i'];
  }
  
  private getPhoraires(){
    this.phoraireService.getPhoraireList().subscribe(data => {
      this.phoraires = data;
    });

}


updatePhoraire(id: any){
  this.router.navigate(['update-phoraire', id]);
}

deletePhoraire(id: any){
  this.phoraireService.deletePhoraire(id).subscribe( data => {
    console.log(data);
    this.getPhoraires();
  })
}

addPh(){
  // this.service.initializeFormGroup();
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = "60%";
  this.dialog.open(AddPhoraireComponent,dialogConfig);

}

}
