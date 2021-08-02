import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Localisation } from 'src/app/model/Localisation';
import { LocalisationService } from 'src/app/_services/localisation.service';

@Component({
  selector: 'app-list-localisation',
  templateUrl: './list-localisation.component.html',
  styleUrls: ['./list-localisation.component.css']
})
export class ListLocalisationComponent implements OnInit {
  localisations?: Localisation[];
  id: any;
  i:any;
  constructor(private localisationService:LocalisationService, private route: ActivatedRoute ,private router: Router) { }

  ngOnInit(): void {
    this.getLocalisations();
    this.i=this.route.snapshot.params['i'];
  }

  private getLocalisations(){
    this.localisationService.getLocalisationList().subscribe(data => {
      this.localisations = data;
    });

}


updateLocalisation(id: any){
  this.router.navigate(['update-localisation', id]);
}

deleteLocalisation(id: any){
  this.localisationService.deleteLocalisation(id).subscribe( data => {
    console.log(data);
    this.getLocalisations();
  })
}

}
