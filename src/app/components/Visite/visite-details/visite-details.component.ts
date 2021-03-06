import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { VisitePM } from 'src/app/model/VisitePM';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { VisitePMService } from 'src/app/_services/visite-pm.service';
import { AddAnnalyseComponent } from '../../Annalyse/add-annalyse/add-annalyse.component';
import { AddHospitalisationComponent } from '../../Hospitalisation/add-hospitalisation/add-hospitalisation.component';
import { AddOrdonanceComponent } from '../../Ordonance/add-ordonance/add-ordonance.component';

@Component({
  selector: 'app-visite-details',
  templateUrl: './visite-details.component.html',
  styleUrls: ['./visite-details.component.css']
})
export class VisiteDetailsComponent implements OnInit {
 visitepm!:VisitePM;
 visitepms!:VisitePM[];

 isLoggedIn = false;
 showAdminBoard = false;
 showModeratorBoard = false;
 username?: string;
 private roles: string[] = [];
  constructor(private visitepmService :VisitePMService,
    private route: ActivatedRoute,private router:Router,private tokenStorageService: TokenStorageService
    ,private dialog1:MatDialog,private dialog2:MatDialog,private dialog3:MatDialog) {this.visitepm = history.state }

  ngOnInit(): void {
    

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;}
    this.getVisitepm();
   

 
 
  }
  private getVisitepm(){
    this.visitepmService.getVisitePMList().subscribe(data => {
      this.visitepms = data;
    });

}
Retour(){
  window.history.back();
}
DemandeOrdonance(visitepm:VisitePM){
  this.router.navigate(['addOrdonance'], {state: visitepm});
}
DemandeHospitalisation(visitePM:VisitePM){
  this.router.navigate(['addHospitalisation'], {state: visitePM});
}
DemandeAnnalyse(visitePM:VisitePM){
  this.router.navigate(['addAnnalyse'], {state: visitePM});
}

AddOrd(){
  // this.service.initializeFormGroup();
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = "600px";
  dialogConfig.height= "400px";
  this.dialog1.open(AddOrdonanceComponent,dialogConfig);

}

AddAnls(){
  // this.service.initializeFormGroup();
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = "400px";
  dialogConfig.height= "300px";
  this.dialog2.open(AddAnnalyseComponent,dialogConfig);

}
AddHosp(){
  // this.service.initializeFormGroup();
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = "700px";
  dialogConfig.height= "450px";
  this.dialog3.open(AddHospitalisationComponent,dialogConfig);

}
printPage() {
  window.print();
}
}
