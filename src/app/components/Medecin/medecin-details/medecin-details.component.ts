import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MedecinPH } from 'src/app/model/MedecinPH';
import { Phoraire } from 'src/app/model/Phoraire';
import { MedecinPHService } from 'src/app/_services/medecin-ph.service';

@Component({
  selector: 'app-medecin-details',
  templateUrl: './medecin-details.component.html',
  styleUrls: ['./medecin-details.component.css']
})
export class MedecinDetailsComponent implements OnInit {

  i: any;
 
  name: any;
  id: any;
  p: number = 1;
  medecinph!:MedecinPH;
  medecinphs!: MedecinPH [];
  Plage_horaire!:Phoraire[];
 
  constructor(private medecinphService :MedecinPHService,
    private route: ActivatedRoute) {this.medecinph = history.state }

  ngOnInit(): void {
    this.getMedecinPh();
   

 
 
  }
  private getMedecinPh(){
    this.medecinphService.getMedecinPhList().subscribe(data => {
      this.medecinphs = data;
    });

}

}
