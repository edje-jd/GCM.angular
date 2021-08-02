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

  hospitalisationVs?: HospitalisationV[];
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



updateHospitalisation(id: any){
  this.router.navigate(['update-hospitalisation', id]);
}

deleteHospitalisation(id: any){
  // this.hospitalisationService.deleteHospitalisation(id).subscribe( data => {
  //   console.log(data);
  //   this.getHospitalisation();
  // })
}

}
