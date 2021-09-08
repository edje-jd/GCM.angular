import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HospitalisationV } from 'src/app/model/HospitalisationV';
import { VisitePM } from 'src/app/model/VisitePM';
import { HospitalisationVService } from 'src/app/_services/hospitalisation-v.service';

@Component({
  selector: 'app-details-hospitalisation',
  templateUrl: './details-hospitalisation.component.html',
  styleUrls: ['./details-hospitalisation.component.css']
})
export class DetailsHospitalisationComponent implements OnInit {

  name: any;
  id: any;
  p: number = 1;
  hospitalisationv!:HospitalisationV;
  hospitalisationvs!: HospitalisationV[];
  visitemv!:VisitePM[];
  
  constructor(private hospitalisationVService :HospitalisationVService,
    private route: ActivatedRoute) {this.hospitalisationv = history.state }

  ngOnInit(): void {
    this.getHospitaliationv();
   

 
 
  }
  private getHospitaliationv(){
    this.hospitalisationVService.getHospitalisationVList().subscribe(data => {
      this.hospitalisationvs = data;
    });

}
Retour(){
  window.history.back();
}
printPage() {
  window.print();
}

}
