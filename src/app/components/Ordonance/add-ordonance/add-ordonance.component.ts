import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicament } from 'src/app/model/Medicament';
import { Ordonance } from 'src/app/model/Ordonance';
import { OrdonanceMV } from 'src/app/model/OrdonanceMV';
import { Visite } from 'src/app/model/Visite';
import { VisitePM } from 'src/app/model/VisitePM';
import { MedicamentService } from 'src/app/_services/medicament.service';
import { OrdonanceMVService } from 'src/app/_services/ordonance-mv.service';
import { OrdonanceService } from 'src/app/_services/ordonance.service';
import { VisitePMService } from 'src/app/_services/visite-pm.service';
import { VisiteService } from 'src/app/_services/visite.service';

@Component({
  selector: 'app-add-ordonance',
  templateUrl: './add-ordonance.component.html',
  styleUrls: ['./add-ordonance.component.css']
})
export class AddOrdonanceComponent implements OnInit {

 
  ordonancemv:OrdonanceMV = new OrdonanceMV();
  visitepm!:VisitePM;
  visitepms!:VisitePM[];
  visite!:Visite;
  medicaments!:Medicament[];
  medicament!:Medicament;
  id?:any;
  constructor(private visitepmservice:VisitePMService,private ordonancemvservice:OrdonanceMVService,private ordonanceService: OrdonanceService,private router: Router,private visiteService:VisiteService,private medicamentService:MedicamentService) {
    this.visitepm = history.state
    this.ordonancemv.ordonance=new Ordonance();
   }

  ngOnInit(): void {
    this.getlistMedicaments();
    this.getlistVisitePMs();
  }

  saveOrdonance(){
    this.ordonancemvservice.addOrdonanceMV(this.ordonancemv).subscribe( data =>{
      console.log(data);

        this.goToOrdonanceList();
      },
      error => console.log(error));
  }
  goToOrdonanceList(){
    this.router.navigate(['/listOrdonance']);
  }
  getlistVisitePMs(){
    this.visitepmservice.getVisitePMList().subscribe(data=>{
    this.visitepms=data;
    })
     }

 getlistMedicaments(){
      this.medicamentService.getMedicamentList().subscribe(data=>{
      this.medicaments=data;
      })
       }
  onSubmit(){
    // this.ordonancemv.medicament=this.medicament;
    // this.ordonancemv.ordonance=this.ordonance;
    this.ordonancemv.visitepm=this.visitepm;
    console.log(this.ordonancemv.medicament);
    this.saveOrdonance();
  }

}
