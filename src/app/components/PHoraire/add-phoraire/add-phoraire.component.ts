import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Phoraire } from 'src/app/model/Phoraire';
import { PhoraireService } from 'src/app/_services/phoraire.service';

@Component({
  selector: 'app-add-phoraire',
  templateUrl: './add-phoraire.component.html',
  styleUrls: ['./add-phoraire.component.css']
})
export class AddPhoraireComponent implements OnInit {
phoraire:Phoraire= new Phoraire();

  constructor(private phoraireService:PhoraireService , private router:Router) { }

  ngOnInit(): void {
  }
  savePhoraire(){
    this.phoraireService.addPhoraire(this.phoraire).subscribe( data =>{
        console.log(data);

        this.goToPhoraireList();
      },
      error => console.log(error))
  }
  goToPhoraireList(){
    this.router.navigate(['/listPhoraire']);
  }
  onSubmit(){
    console.log(this.phoraire);
    this.savePhoraire();
  }


}


