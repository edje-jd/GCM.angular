import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Medecin } from 'src/app/model/Medecin';
import { MedecinPH } from 'src/app/model/MedecinPH';
import { Phoraire } from 'src/app/model/Phoraire';
import { MedecinPHService } from 'src/app/_services/medecin-ph.service';
import { MedecinService } from 'src/app/_services/medecin.service';
import { PhoraireService } from 'src/app/_services/phoraire.service';
import { AddMedecinComponent } from '../add-medecin/add-medecin.component';

@Component({
  selector: 'app-list-medecin',
  templateUrl: './list-medecin.component.html',
  styleUrls: ['./list-medecin.component.css']
})
export class ListMedecinComponent implements OnInit {

  medecins!: Medecin[];
  medecinPh!: MedecinPH;
  medecinPhs!: MedecinPH[];
  id: any;
  i:any;
  phoraire?: Phoraire;
  phoraires?:Phoraire[];
   
  displayedColumns: string[] = ['id', 'medecin.name', 'medecin.specialicite','medecin.numPhone','medecin.email','plage_Horaire.heure_deb','plage_Horaire.heure_fin', 'Actions'];
  constructor(private dialog:MatDialog,private medecinPhService : MedecinPHService ,private medecinservice: MedecinService, private route: ActivatedRoute ,private router: Router,private phoraireService:PhoraireService) { }
  dataSource!:any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngOnInit(): void {
   this.medecinPhService.getMedecinPhList().subscribe(data => {
      this.dataSource= new MatTableDataSource<MedecinPH>(data);
      this.dataSource.paginator= this.paginator;
      this.dataSource.sort= this.sort;
    });
    this.getMedecinsPh();
    
    this.i=this.route.snapshot.params['i'];
    this.phoraire=new Phoraire()
    this.phoraireService.getPhoraireById(this.i).subscribe(dta=> {
      this.phoraire=dta;});
  }

  private getMedecins(){
    this.medecinPhService.getMedecinPhList().subscribe(data => {
      this.medecinPhs = data;
    });

}
private getMedecinsPh(){
  this.medecinPhService.getMedecinPhList().subscribe(data => {
    this.medecinPhs= data;
  });

}

MedecinDetails(medecinph: MedecinPH){
  this.router.navigate(['medecin-details'],{state:medecinph});
}

updateMedecin(medecin: Medecin){
  this.router.navigate(['update-medecin'],{state:medecin});
}

deleteMedecin(id: any){
  this.medecinPhService.deleteMedecinPH(id).subscribe( data => {
    console.log(data);
    this.getMedecinsPh();
  })
}
getPhorairebyId(id:number){
  this.phoraireService.getPhoraireById(id).subscribe(data=>{
  this.phoraire=data;
  })
   }
   public Search(key: string): void {
    console.log(key);
    const results: MedecinPH[] = [];
    for (const medecinPh of this.medecinPhs) {
      if (medecinPh.medecin.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || medecinPh.medecin.specialicite?.toLowerCase().indexOf(key.toLowerCase()) !== -1
       ) {
        results.push(medecinPh);
      }
    }this.medecinPhs = results;
    if (results.length === 0 || !key) {
      this.getMedecinsPh();
    }
  }

  addMdc(){
    // this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "700px";
   dialogConfig.height= "450px";
    this.dialog.open(AddMedecinComponent,dialogConfig);
  
  }
  
  

}
