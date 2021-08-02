import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Phoraire } from 'src/app/model/Phoraire';
import { PhoraireService } from 'src/app/_services/phoraire.service';

@Component({
  selector: 'app-list-phoraire',
  templateUrl: './list-phoraire.component.html',
  styleUrls: ['./list-phoraire.component.css']
})
export class ListPhoraireComponent implements OnInit {
  phoraires?: Phoraire[];
  id: any;
  i:any;
  constructor(private phoraireService:PhoraireService,private router :Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPhoraires();
    this.i=this.route.snapshot.params['i'];
  }
  
  private getPhoraires(){
    this.phoraireService.getPhoraireList().subscribe(data => {
      this.phoraires = data;
    });

}


updatePhoraire(id: any){
  this.router.navigate(['update-phoraire', id]);
}

deletePhoraire(id: any){
  this.phoraireService.deletePhoraire(id).subscribe( data => {
    console.log(data);
    this.getPhoraires();
  })
}

}
