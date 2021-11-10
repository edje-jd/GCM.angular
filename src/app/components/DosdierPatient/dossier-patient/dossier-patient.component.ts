import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { patient } from 'src/app/model/Patient';
import { VisitePM } from 'src/app/model/VisitePM';
import { MedecinService } from 'src/app/_services/medecin.service';
import { PatientService } from 'src/app/_services/patient.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { VisitePMService } from 'src/app/_services/visite-pm.service';
import { VisiteService } from 'src/app/_services/visite.service';

@Component({
  selector: 'app-dossier-patient',
  templateUrl: './dossier-patient.component.html',
  styleUrls: ['./dossier-patient.component.css']
})
export class DossierPatientComponent implements OnInit {

 
  visitepms!:VisitePM[];
  displayedColumns: string[] = ['date_visit' ,'patient.name','patient.phone', 'medecinPH.medecin.name','type_visite','patient.age','patient.adresse','Actions'];
  constructor(private visitepmservice :VisitePMService,private tokenStorageService: TokenStorageService,private patientservice: PatientService, private route: ActivatedRoute ,private router: Router,private visiteService:VisiteService,private medecinService:MedecinService) { }
  dataSource !:any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngOnInit(): void {
    this.visitepmservice.getVisitePMList().subscribe(data => {
      this.dataSource= new MatTableDataSource<VisitePM>(data.filter(_visitepm => _visitepm.visite.effectue));
      this.dataSource.paginator= this.paginator;
      this.dataSource.sort=this.sort;
    });
    this.getVisitePMs();
  }

  detalVisite(visitepm:VisitePM){
    this.router.navigate(['Dosier-Detail'],{state:visitepm});
  }
  private getVisitePMs(){
    this.visitepmservice.getVisitePMList().subscribe(data => {
      this.visitepms = data;
    });
  
  }

  public searchDossier(key: string): void {
    console.log(key);
    const results: VisitePM[] = [];
    for (const visitepm of this.visitepms) {
      if (visitepm.patient.name?.toLowerCase().indexOf(key.toLowerCase()) !== -1
      
      || visitepm.patient.phone?.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(visitepm);
      }
    }
    this.dataSource = results;
    if (results.length === 0 || !key) {
      this.dataSource;
    }
  }

}
