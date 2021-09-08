import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdonanceMV } from 'src/app/model/OrdonanceMV';
import { VisitePM } from 'src/app/model/VisitePM';
import { OrdonanceMVService } from 'src/app/_services/ordonance-mv.service';

@Component({
  selector: 'app-ordonance-details',
  templateUrl: './ordonance-details.component.html',
  styleUrls: ['./ordonance-details.component.css']
})
export class OrdonanceDetailsComponent implements OnInit {
  name: any;
  id: any;
  p: number = 1;
  ordonancemv!:OrdonanceMV;
  ordonancemvs!: OrdonanceMV [];
  visitemv!:VisitePM[];
  
  constructor(private ordonancemvService :OrdonanceMVService,
    private route: ActivatedRoute) {this.ordonancemv = history.state }

  ngOnInit(): void {
    this.getOrdonancemv();
   

 
 
  }
  private getOrdonancemv(){
    this.ordonancemvService.getOrdonanceMVList().subscribe(data => {
      this.ordonancemvs = data;
    });

}
Retour(){
  window.history.back();
}

printPage() {
  window.print();
}
}
