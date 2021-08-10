import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hospitalisation } from 'src/app/model/Hospitalisation';
import { HospitalisationV } from 'src/app/model/HospitalisationV';
import { Visite } from 'src/app/model/Visite';
import { HospitalisationVService } from 'src/app/_services/hospitalisation-v.service';
import { HospitalisationService } from 'src/app/_services/hospitalisation.service';

@Component({
  selector: 'app-list-hospitalisation',
  templateUrl: './list-hospitalisation.component.html',
  styleUrls: ['./list-hospitalisation.component.css']
})
export class ListHospitalisationComponent implements OnInit {

  hospitalisationVs!: HospitalisationV[];
  id!: any;
  i:any;
  visite!:Visite;
  
  
  constructor(private hospitalisationVService: HospitalisationVService, private route: ActivatedRoute ,private router: Router) { }

  ngOnInit(): void {
  
    this.getHospitalisationV();
    this.i=this.route.snapshot.params['i'];
    
  }

  private getHospitalisationV(){
    this.hospitalisationVService.getHospitalisationVList().subscribe(data => {
      this.hospitalisationVs = data;
    });

}



updateHospitalisation(hospitalisation: Hospitalisation){
  this.router.navigate(['update-hospitalisation'],{state:hospitalisation});
}
HospitalisationDetails(hospitalisationV:HospitalisationV){
  this.router.navigate(['details-hospitalisation'],{state:hospitalisationV});
}

deleteHospitalisation(id: any){
  this.hospitalisationVService.deleteHospitalisationV(id).subscribe( data => {
    console.log(data);
    this.getHospitalisationV();
  })
}
Retour(){
  window.history.back();
}
public Search(key: string): void {
  console.log(key);
  const results: HospitalisationV[] = [];
  for (const hospitalisationV of this.hospitalisationVs) {
    if ( hospitalisationV.visitePM.patient.name?.toLowerCase().indexOf(key.toLowerCase()) !== -1
    ||  hospitalisationV.hospitalisation.nomUnite?.toLowerCase().indexOf(key.toLowerCase()) !== -1
    
     ) {
      results.push(hospitalisationV );
    }
  }
  this.hospitalisationVs= results;
  if (results.length === 0 || !key) {
    this.getHospitalisationV();
  }
}

}
