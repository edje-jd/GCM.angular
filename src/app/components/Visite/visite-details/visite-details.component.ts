import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VisitePM } from 'src/app/model/VisitePM';
import { VisitePMService } from 'src/app/_services/visite-pm.service';

@Component({
  selector: 'app-visite-details',
  templateUrl: './visite-details.component.html',
  styleUrls: ['./visite-details.component.css']
})
export class VisiteDetailsComponent implements OnInit {
 visitepm!:VisitePM;
 visitepms!:VisitePM[];
  constructor(private visitepmService :VisitePMService,
    private route: ActivatedRoute) {this.visitepm = history.state }

  ngOnInit(): void {
    this.getVisitepm();
   

 
 
  }
  private getVisitepm(){
    this.visitepmService.getVisitePMList().subscribe(data => {
      this.visitepms = data;
    });

}

}
