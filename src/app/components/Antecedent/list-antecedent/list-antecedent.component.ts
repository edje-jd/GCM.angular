import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Antecedent } from 'src/app/model/Antecedent';
import { AntecedentService } from 'src/app/_services/antecedent.service';

@Component({
  selector: 'app-list-antecedent',
  templateUrl: './list-antecedent.component.html',
  styleUrls: ['./list-antecedent.component.css']
})
export class ListAntecedentComponent implements OnInit {
  antecedents?: Antecedent[];
  id: any;
  i:any;
  p:number=1;

  constructor(private antecedentService:AntecedentService, private route: ActivatedRoute ,private router: Router) { }

  ngOnInit(): void {
    this.getAntecedents();
    this.i=this.route.snapshot.params['i'];
  }

  private getAntecedents(){
    this.antecedentService.getAntecedentList().subscribe(data => {
      this.antecedents = data;
    });

}


updateAntecedent(id: any){
  this.router.navigate(['update-antecedent', id]);
}

deleteAntecedent(id: any){
  this.antecedentService.deleteAntecedent(id).subscribe( data => {
    console.log(data);
    this.getAntecedents();
  })
}
}
