import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Visite } from 'src/app/model/Visite';
import { VisitePM } from 'src/app/model/VisitePM';
import { VisitePMService } from 'src/app/_services/visite-pm.service';

@Component({
  selector: 'app-exemple',
  templateUrl: './exemple.component.html',
  styleUrls: ['./exemple.component.css']
})
export class ExempleComponent {
 
  displayedColumnss:string[]=['date_visit','patient.name','patient.phone','medecinPH.medecin.name','type_visite','effectue','Actions']
  constructor(private visitepmservice :VisitePMService,private router :Router,private _liveAnnouncer: LiveAnnouncer) {}
  dataSource4 !:any ;
  visitepms!:VisitePM[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.visitepmservice.getVisitePMList().subscribe(data => {
      this.dataSource4= new MatTableDataSource<VisitePM>(data);
     
      this.dataSource4.paginator= this.paginator;
      this.dataSource4.sort=this.sort;
  });
  this.getVisitePMs();
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
public searchVisites(key: string): void {
  console.log(key);
  const results: VisitePM[] = [];
  for (const visitepm of this.visitepms) {
    if (visitepm.patient.name?.toLowerCase().indexOf(key.toLowerCase()) !== -1
    
    || visitepm.patient.phone?.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
      results.push(visitepm);
    }
  }
  this.dataSource4 = results;
  if (results.length === 0 || !key) {
    this.dataSource4;
  }
}
announceSortChange(sortState: Sort) {
  
  if (sortState.direction) {
    this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
  } else {
    this._liveAnnouncer.announce('Sorting cleared');
  }
}
  // onSubmit(): void {
  //   alert('Thanks!');
  // }
}
