import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AnnalyseV } from 'src/app/model/AnnlyseV';
import { Hospitalisation } from 'src/app/model/Hospitalisation';
import { HospitalisationV } from 'src/app/model/HospitalisationV';
import { OrdonanceMV } from 'src/app/model/OrdonanceMV';
import { Visite } from 'src/app/model/Visite';
import { VisitePM } from 'src/app/model/VisitePM';
import { AnnalyseVService } from 'src/app/_services/annalyse-v.service';
import { HospitalisationVService } from 'src/app/_services/hospitalisation-v.service';
import { OrdonanceMVService } from 'src/app/_services/ordonance-mv.service';
import { VisitePMService } from 'src/app/_services/visite-pm.service';
import { AddAnnalyseComponent } from '../../Annalyse/add-annalyse/add-annalyse.component';
import { AddHospitalisationComponent } from '../../Hospitalisation/add-hospitalisation/add-hospitalisation.component';
import { AddOrdonanceComponent } from '../../Ordonance/add-ordonance/add-ordonance.component';
import { AddVisiteComponent } from '../../Visite/add-visite/add-visite.component';

@Component({
  selector: 'app-dosier-detail',
  templateUrl: './dosier-detail.component.html',
  styleUrls: ['./dosier-detail.component.css']
})
export class DosierDetailComponent implements OnInit {
visitepm!:VisitePM;
displayedColumns: string[] = [ 'date_visit','type_visite','Actions'];
displayedColumnsH: string[] = [ 'date_debut_hosp', 'date_fin_hosp','Actions'];
displayedColumnsO: string[] = ['date_ord','Actions'];
displayedColumnsA: string[] = ['dateAnls','nomAnls', 'Actions'];
  constructor(private dialog:MatDialog,private annalyseVService:AnnalyseVService,private ordonanceMVService:OrdonanceMVService,private visitepmservice:VisitePMService,private router:Router,private hospitalisationVService:HospitalisationVService) { this.visitepm = history.state
  console.log(this.visitepm) }
  dataSource2:any;
  hospitalisation:any;
  ordonnance:any;
  annalyse:any;
  @ViewChildren(MatPaginator) paginators = new QueryList<MatPaginator>();
  @ViewChildren(MatSort) sorts = new QueryList<MatSort>();
  
  ngOnInit(): void {
    this.visitepmservice.getVisitePMList().subscribe(data => {
      this.dataSource2= new MatTableDataSource<VisitePM>(data.filter(_visitepm => _visitepm.visite.effectue && _visitepm.patient.name==this.visitepm.patient.name));
      this.dataSource2.paginator= this.paginators.toArray()[0];
      this.dataSource2.sort=this.sorts.toArray()[0];
    });
    this.annalyseVService.getAnnalyseVList().subscribe(data => {
      this.annalyse= new MatTableDataSource<AnnalyseV>(data.filter(_annalyse =>  _annalyse .visitePM.patient.name==this.visitepm.patient.name));
      this.annalyse.paginator=this.paginators.toArray()[1];
      this.annalyse.sort= this.sorts.toArray()[1];
    });

      this.hospitalisationVService.getHospitalisationVList().subscribe(data => {
        this.hospitalisation= new MatTableDataSource<HospitalisationV>(data.filter(_hospitalisation =>  _hospitalisation.visitePM.patient.name==this.visitepm.patient.name));
        console.log(data);
        this.hospitalisation.paginator= this.paginators.toArray()[2];
        this.hospitalisation.sort= this.sorts.toArray()[2];
      });

        this.ordonanceMVService.getOrdonanceMVList().subscribe(data => {
        this.ordonnance= new MatTableDataSource<OrdonanceMV>(data.filter(_ordonnance =>  _ordonnance.visitepm.patient.name==this.visitepm.patient.name));
        this.ordonnance.paginator=this.paginators.toArray()[3];
        this.ordonnance.sort= this.sorts.toArray()[3];
      });

       
  }

  updateVisite(visite: Visite){
    this.router.navigate(['update-visite'],{state:visite});
  }
  detalVisite(visitepm:VisitePM){
    this.router.navigate(['visiteDetails'], {state: visitepm});
  }
  updateHospitalisation(hospitalisation: Hospitalisation){
    this.router.navigate(['update-hospitalisation'],{state:hospitalisation});
  }
  HospitalisationDetails(hospitalisationV:HospitalisationV){
    this.router.navigate(['details-hospitalisation'],{state:hospitalisationV});
  }
  
  ordoranceDetails(ordonancemv:OrdonanceMV){
    this.router.navigate(['ordonance-details'],{state:ordonancemv});
  }

  annalyseDetail(annalyseV: AnnalyseV){
    this.router.navigate(['annalyse-detail'],{state:annalyseV});
  } 
  findPatientByName(name:HTMLInputElement){
    this.applyFilter(name.value);
  
  }
  applyFilter(filterValue:string){
    filterValue= filterValue.trim();
    filterValue= filterValue.toLocaleLowerCase();
    this.dataSource2.filter = filterValue;
   }

   AddOrd(){
    // this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "600px";
    dialogConfig.height= "400px";
    this.dialog.open(AddOrdonanceComponent,dialogConfig);
  
  }
  AddHosp(){
    // this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "700px";
   dialogConfig.height= "450px";
    this.dialog.open(AddHospitalisationComponent,dialogConfig);
  
  }
  AddAnls(){
    // this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "600px";
    dialogConfig.height= "450px";
    this.dialog.open(AddAnnalyseComponent,dialogConfig);
  
  }
  addVisite(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "45%";
    dialogConfig.height = "65%";
    dialogConfig.data = {patient: this.visitepm.patient}
    
    this.dialog.open(AddVisiteComponent,dialogConfig);}

    Retour(){
      window.history.back();
    }
}
