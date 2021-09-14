import { NgIf } from '@angular/common';
import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Medecin } from 'src/app/model/Medecin';
import { patient } from 'src/app/model/Patient';
import { Secretaire } from 'src/app/model/Secretaire';
import { Visite } from 'src/app/model/Visite';
import { VisitePM } from 'src/app/model/VisitePM';
import { MedecinService } from 'src/app/_services/medecin.service';
import { PatientService } from 'src/app/_services/patient.service';
import { SecretaireService } from 'src/app/_services/secretaire.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { VisitePMService } from 'src/app/_services/visite-pm.service';
import { VisiteService } from 'src/app/_services/visite.service';
import { UpdateVisiteComponent } from '../update-visite/update-visite.component';

@Component({
  selector: 'app-list-visite',
  templateUrl: './list-visite.component.html',
  styleUrls: ['./list-visite.component.css']
})
export class ListVisiteComponent implements OnInit {
  visitepms!:VisitePM[];
  visitepm!:VisitePM;
  visite!: Visite[];
  id: any;
  i:any;
  patient?: patient;
  patients?:patient[];
  medecins?: Medecin[];
  medecin?: Medecin;
  secretaires?:Secretaire[];
  secretaire?:Secretaire;
  
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  displayedColumnss:string[]=['date_visit','patient.name','medecinPH.medecin.name','type_visite','Actions']
  displayedColumns: string[] = ['date_visit', 'patient.name', 'medecinPH.medecin.name','type_visite','Actions'];
  constructor(private dialog:MatDialog,private visitepmservice :VisitePMService,private tokenStorageService: TokenStorageService,private patientservice: PatientService, private route: ActivatedRoute ,private router: Router,private visiteService:VisiteService,private medecinService:MedecinService,private secretaireService:SecretaireService) { }
  dataSource !:any ;
  dataSource2 !:any;
  currentDate = new Date();
    
   
    
  @ViewChildren(MatPaginator) paginators = new QueryList<MatPaginator>();
  @ViewChildren(MatSort) sorts = new QueryList<MatSort>();

  setDataSources() {
    this.visitepmservice.getVisitePMList().subscribe(data => {
      this.dataSource= new MatTableDataSource<VisitePM>(data.filter(_visitepm => !_visitepm.visite.effectue));
     
      this.dataSource.paginator= this.paginators.toArray()[0];
      this.dataSource.sort=this.sorts.toArray()[0];

      this.dataSource2= new MatTableDataSource<VisitePM>(data.filter(_visitepm =>_visitepm.visite.effectue  ));  
      //   console.log("date: ", _visitepm.visite.date_visit)
      //   const year = _visitepm.visite.date_visit.split("-")[0]
      //   const month = _visitepm.visite.date_visit.split("-")[1]
      //   const day = _visitepm.visite.date_visit.split("-")[2].split("T")[0]

      //  console.log("is :", this.isTodayVisit(day,  month, year))
         
  
      this.dataSource2.paginator = this.paginators.toArray()[1];
      this.dataSource2.sort= this.sorts.toArray()[1];
    });
  }


  // isTodayVisit(day: number, month: number, year: number) {
  //         console.log(`current day: ${this.currentDate.getDate()}, our day: ${day}`)
  //         console.log(`current month: ${this.currentDate.getMonth()}, our month: ${month}`)
  //         console.log(`current year: ${this.currentDate.getFullYear()}, our year: ${year}`)
  //         return this.currentDate.getDate() === day &&
  //         this.currentDate.getMonth() === month &&
  //         this.currentDate.getFullYear() === year 
  //         }

  ngOnInit(): void {
   
  this.setDataSources()
   
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;}

    this.getVisitePMs();
    this.i=this.route.snapshot.params['i'];
    this.patient=new patient()
    this.patientservice.getPatientById(this.i).subscribe(dta=> {
      this.patient=dta;});
    this.medecin=new Medecin()
    this.medecinService.getMedecinById(this.i).subscribe(dta=> {
      this.medecin=dta;}); 
    this.secretaire=new Secretaire()
    this.secretaireService.getSecretaireById(this.i).subscribe(dta=> {
       this.secretaire=dta;});   
  }

  private getVisitePMs(){
    this.visitepmservice.getVisitePMList().subscribe(data => {
      this.visitepms = data;
    });

}

detalVisite(visitepm:VisitePM){
  this.router.navigate(['visiteDetails'], {state: visitepm});
}
 
updateVisite(visite: Visite){
  this.router.navigate(['update-visite'],{state:visite});
}

findPatientByName(name:HTMLInputElement){
  this.applyFilter(name.value);

}
applyFilter(filterValue:string){
  filterValue= filterValue.trim();
  filterValue= filterValue.toLowerCase();
  this.dataSource2.filter = filterValue;
 }



deleteVisite(id: any){
  this.visitepmservice.deleteVisitePM(id).subscribe( data => {
    console.log(data);
    this.getVisitePMs();
  })
}





getMedecinbyId(id:number){
  this.medecinService.getMedecinById(id).subscribe(data=>{
  this.medecin=data;
  })
}

moveTo(visitepm:VisitePM, effectue: boolean){
    visitepm.visite.effectue=effectue;
    console.log(visitepm.visite.effectue)
    this.visiteService.updateVisite(visitepm.visite.id,visitepm.visite).subscribe( data => {
      this.setDataSources()
    })

}


   
  //  updateVisite(){
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.disableClose = true;
  //   dialogConfig.autoFocus = true;
  //   dialogConfig.width = "45%";
  //   dialogConfig.height = "65%";
  //   dialogConfig.data = {VisitePM: this.dataSource.visite}
    
  //   this.dialog.open(UpdateVisiteComponent,dialogConfig);
   
  // }

}
