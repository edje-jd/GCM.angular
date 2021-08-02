import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
export class ListOrdonanceComponent implements OnInit {

  ordonances?: Ordonance[];
  id: any;
  i:any;
  patient!:patient;
  ordonancemvs!:OrdonanceMV[];
  visite!: Visite;
  visites?:Visite[];
  medicaments?: Medicament[];
  medicament!: Medicament;
  constructor(private ordonanceMVService: OrdonanceMVService, private route: ActivatedRoute ,private router: Router,private visiteService:VisiteService,private medicamentService:MedicamentService) { }

  ngOnInit(): void {
    this.getOrdonanceMVs();
   
  }

  private getOrdonanceMVs(){
    this.ordonanceMVService.getOrdonanceMVList().subscribe(data => {
      this.ordonancemvs = data;
    });

}
ordoranceDetails(id:any){
  this.router.navigate(['ordonance-details']);
}


updateOrdonance(id: any){
  this.router.navigate(['update-ordonance', id]);
}

deleteOrdonance(id: any){
  // this.ordonanceService.deleteOrdonance(id).subscribe( data => {
  //   console.log(data);
  //   this.getOrdonances();
  // })
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
}
