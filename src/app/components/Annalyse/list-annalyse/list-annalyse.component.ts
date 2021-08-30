import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Annalyse } from 'src/app/model/Annalyse';
import { AnnalyseV } from 'src/app/model/AnnlyseV';
import { AnnalyseServiceService } from 'src/app/_services/annalyse-service.service';
import { AnnalyseVService } from 'src/app/_services/annalyse-v.service';

@Component({
  selector: 'app-list-annalyse',
  templateUrl: './list-annalyse.component.html',
  styleUrls: ['./list-annalyse.component.css']
})
export class ListAnnalyseComponent implements OnInit {

  annalyseVs!: AnnalyseV[];
  id: any;
  i:any;
  displayedColumns: string[] = ['id', 'patient.name', 'nomAnls', 'nom_labo','Actions'];
  constructor(private annalyseVService: AnnalyseVService,private annalyseService:AnnalyseServiceService, private route: ActivatedRoute ,private router: Router) { }

  subscribe!:Subscription;
  dataSource!:any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngOnInit(): void {
    this.subscribe= this.annalyseVService.getAnnalyseVList().subscribe(data => {
      this.dataSource= new MatTableDataSource<AnnalyseV>(data);
      this.dataSource.paginator= this.paginator;
      this.dataSource.sort= this.sort;
    });
    this.getAnnalyseVs();
   
  }

  private getAnnalyseVs(){
    this.annalyseVService.getAnnalyseVList().subscribe(data => {
      this.annalyseVs = data;
    });

}


updateAnnalyse(annalyse: Annalyse){
  this.router.navigate(['update-annalyse'], {state:annalyse});
}

deleteAnnalyse(id: any){
  this.annalyseVService.deleteAnnalyseV(id).subscribe( data => {
    console.log(data);
    this.getAnnalyseVs();
  })
}
public Search(key: string): void {
  console.log(key);
  const results: AnnalyseV[] = [];
  for (const annalyseV of this.annalyseVs) {
    if ( annalyseV.visitePM.patient.name?.toLowerCase().indexOf(key.toLowerCase()) !== -1
    ||  annalyseV.annalyse.nomAnls?.toLowerCase().indexOf(key.toLowerCase()) !== -1
    ||   annalyseV.annalyse.nom_labo?.toLowerCase().indexOf(key.toLowerCase()) !== -1
     ) {
      results.push(annalyseV );
    }
  }
  this.annalyseVs = results;
  if (results.length === 0 || !key) {
    this.getAnnalyseVs();
  }
}
Retour(){
  window.history.back();
}

}
