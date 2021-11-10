import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Medicament } from 'src/app/model/Medicament';
import { Ordonance } from 'src/app/model/Ordonance';
import { OrdonanceMV } from 'src/app/model/OrdonanceMV';
import { patient } from 'src/app/model/Patient';
import { Visite } from 'src/app/model/Visite';
import { MedicamentService } from 'src/app/_services/medicament.service';
import { OrdonanceMVService } from 'src/app/_services/ordonance-mv.service';
import { OrdonanceService } from 'src/app/_services/ordonance.service';
import { VisiteService } from 'src/app/_services/visite.service';

@Component({
  selector: 'app-list-ordonance',
  templateUrl: './list-ordonance.component.html',
  styleUrls: ['./list-ordonance.component.css']
})
export class ListOrdonanceComponent implements OnInit ,OnDestroy{

  ordonances?: Ordonance[];
  id: any;
  i:any;
  patient!:patient;
  ordonancemvs!:OrdonanceMV[];
  visite!: Visite;
  visites?:Visite[];
  medicaments?: Medicament[];
  medicament!: Medicament;

  displayedColumns: string[] = ['id', 'patient.name', 'date_ord', 'dosage','nomMedc','medecin.name','Actions'];
  constructor(private ordonanceService:OrdonanceService,private ordonanceMVService: OrdonanceMVService, private route: ActivatedRoute ,private router: Router,private visiteService:VisiteService,private medicamentService:MedicamentService) { }
  
  subscribe!:Subscription;
  dataSource!:any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngOnInit(): void {
    this.subscribe= this.ordonanceMVService.getOrdonanceMVList().subscribe(data => {
      this.dataSource= new MatTableDataSource<OrdonanceMV>(data);
      this.dataSource.paginator= this.paginator;
      this.dataSource.sort= this.sort;
    });
    this.getOrdonanceMVs();
   
  }
  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }

  private getOrdonanceMVs(){
    this.ordonanceMVService.getOrdonanceMVList().subscribe(data => {
      this.ordonancemvs = data;
    });

}
ordoranceDetails(ordonancemv:OrdonanceMV){
  this.router.navigate(['ordonance-details'],{state:ordonancemv});
}


updateOrdonance(ordonance: Ordonance){
  this.router.navigate(['update-ordonance'],{state:ordonance});
}

deleteOrdonance(id: any){
  this.ordonanceMVService.deleteOrdonanceMV(id).subscribe( data => {
    console.log(data);
    this.getOrdonanceMVs();
  })
}

getVisitebyId(id:number){
  this.visiteService.getVisiteById(id).subscribe(data=>{
  this.visite=data;
  })


}

getMedicamentbyId(id:number){
  this.medicamentService.getMedicamentById(id).subscribe(data=>{
  this.medicament=data;
  })
   }

   public Search(key: string): void {
    console.log(key);
    const results: OrdonanceMV[] = [];
    for (const ordonancemv of this.ordonancemvs) {
      if ( ordonancemv.visitepm.patient.name?.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ||  ordonancemv.visitepm.medecinPH.medecin.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
      // ||  ordonancemv.medicament.nomMedc?.toLowerCase().indexOf(key.toLowerCase()) !== -1
       ) {
        results.push(ordonancemv );
      }
    }
    this.ordonancemvs = results;
    if (results.length === 0 || !key) {
      this.getOrdonanceMVs();
    }
  }
  Retour(){
    window.history.back();
  }
}
