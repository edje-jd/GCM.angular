import { Component, OnInit } from '@angular/core';
import { AnnalyseV } from 'src/app/model/AnnlyseV';

@Component({
  selector: 'app-annalyse-detail',
  templateUrl: './annalyse-detail.component.html',
  styleUrls: ['./annalyse-detail.component.css']
})
export class AnnalyseDetailComponent implements OnInit {
annalysev!: AnnalyseV;
  constructor() {this.annalysev = history.state }

  ngOnInit(): void {
  }

  Retour(){
    window.history.back();
  }
  printPage() {
    window.print();

  }

  

}
