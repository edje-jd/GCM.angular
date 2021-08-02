import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medecin } from 'src/app/model/Medecin';
import { MedecinPH } from 'src/app/model/MedecinPH';
import { Phoraire } from 'src/app/model/Phoraire';
import { MedecinPHService } from 'src/app/_services/medecin-ph.service';
import { MedecinService } from 'src/app/_services/medecin.service';
import { PhoraireService } from 'src/app/_services/phoraire.service';

@Component({
  selector: 'app-list-medecin',
  templateUrl: './list-medecin.component.html',
  styleUrls: ['./list-medecin.component.css']
})
export class ListMedecinComponent implements OnInit {

  medecins!: Medecin[];
  medecinPh!: MedecinPH;
  medecinPhs!: MedecinPH[];
  id: any;
  i:any;
  phoraire?: Phoraire;
  phoraires?:Phoraire[];
  
  constructor(private medecinPhService : MedecinPHService ,private medecinservice: MedecinService, private route: ActivatedRoute ,private router: Router,private phoraireService:PhoraireService) { }

  ngOnInit(): void {
    this.medecinPhs;
    this.getMedecinsPh();
    
    this.i=this.route.snapshot.params['i'];
    this.phoraire=new Phoraire()
    this.phoraireService.getPhoraireById(this.i).subscribe(dta=> {
      this.phoraire=dta;});
  }

  private getMedecins(){
    this.medecinPhService.getMedecinPhList().subscribe(data => {
      this.medecinPhs = data;
    });

}
private getMedecinsPh(){
  this.medecinPhService.getMedecinPhList().subscribe(data => {
    this.medecinPhs= data;
  });

}

MedecinDetails(id: any){
  this.router.navigate(['medecin-details', id]);
}

updateMedecin(id: any){
  this.router.navigate(['update-medecin', id]);
}

deleteMedecin(id: any){
  this.medecinservice.deleteMedecin(id).subscribe( data => {
    console.log(data);
    this.getMedecins();
  })
}
getPhorairebyId(id:number){
  this.phoraireService.getPhoraireById(id).subscribe(data=>{
  this.phoraire=data;
  })
   }
   public Search(key: string): void {
    console.log(key);
    const results: MedecinPH[] = [];
    for (const medecinPh of this.medecinPhs) {
      if (medecinPh.medecin.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || medecinPh.medecin.specialicite?.toLowerCase().indexOf(key.toLowerCase()) !== -1
       ) {
        results.push(medecinPh);
      }
    }this.medecinPhs = results;
    if (results.length === 0 || !key) {
      this.getMedecinsPh();
    }
  }



}
