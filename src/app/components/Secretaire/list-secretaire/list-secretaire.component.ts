import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Secretaire } from 'src/app/model/Secretaire';
import { SecretaireService } from 'src/app/_services/secretaire.service';
import { AddSecretaireComponent } from '../add-secretaire/add-secretaire.component';

@Component({
  selector: 'app-list-secretaire',
  templateUrl: './list-secretaire.component.html',
  styleUrls: ['./list-secretaire.component.css']
})
export class ListSecretaireComponent implements OnInit {

  secretaires!: Secretaire[];
  id: any;
  i:any;
  displayedColumns: string[] = ['id', 'nom_sec','email','num_tel','Actions'];
  constructor(private dialog:MatDialog,private secretaireService:SecretaireService, private route: ActivatedRoute ,private router: Router) { }

  ngOnInit(): void {
    this.getSecretaires();
    this.i=this.route.snapshot.params['i'];
  }

  private getSecretaires(){
    this.secretaireService.getSecretaireList().subscribe(data => {
      this.secretaires = data;
    });

}


updateSecretaire(id: any){
  this.router.navigate(['update-secretaire', id]);
}

deleteSecretaire(id: any){
  this.secretaireService.deleteSecretaire(id).subscribe( data => {
    console.log(data);
    this.getSecretaires();
  })
}

addSecr(){
  // this.service.initializeFormGroup();
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = "50%";
  this.dialog.open(AddSecretaireComponent,dialogConfig);

}
}
