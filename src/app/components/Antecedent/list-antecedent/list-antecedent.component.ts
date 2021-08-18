import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Antecedent } from 'src/app/model/Antecedent';
import { AntecedentService } from 'src/app/_services/antecedent.service';
import { AddAntecedentComponent } from '../add-antecedent/add-antecedent.component';

@Component({
  selector: 'app-list-antecedent',
  templateUrl: './list-antecedent.component.html',
  styleUrls: ['./list-antecedent.component.css']
})
export class ListAntecedentComponent implements OnInit {
  antecedents!: Antecedent[];
  id: any;
  i:any;
  p:number=1;
  displayedColumns: string[] = ['id', 'nom_malade','Actions'];
  constructor(private dialog:MatDialog,private antecedentService:AntecedentService, private route: ActivatedRoute ,private router: Router) { }

  ngOnInit(): void {
    this.getAntecedents();
    this.i=this.route.snapshot.params['i'];
  }

  private getAntecedents(){
    this.antecedentService.getAntecedentList().subscribe(data => {
      this.antecedents = data;
    });

}


updateAntecedent(antecedent: Antecedent){
  
  this.router.navigate(['update-antecedent'], {state:antecedent});
}

deleteAntecedent(id: any){
  this.antecedentService.deleteAntecedent(id).subscribe( data => {
    console.log(data);
    this.getAntecedents();
  })
}
addAntec(){
  // this.service.initializeFormGroup();
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = "60%";
  this.dialog.open(AddAntecedentComponent,dialogConfig);

}

}
