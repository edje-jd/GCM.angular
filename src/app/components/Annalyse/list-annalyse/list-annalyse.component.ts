import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Annalyse } from 'src/app/model/Annalyse';
import { AnnalyseV } from 'src/app/model/AnnlyseV';
import { AnnalyseServiceService } from 'src/app/_services/annalyse-service.service';
import { AnnalyseVService } from 'src/app/_services/annalyse-v.service';

@Component({
  selector: 'app-list-annalyse',
  templateUrl: './list-annalyse.component.html',
  styleUrls: ['./list-annalyse.component.css']
})
export class ListAnnalyseComponent implements OnInit {

  annalyseVs?: AnnalyseV[];
  id: any;
  i:any;
  constructor(private annalyseVService: AnnalyseVService,private annalyseService:AnnalyseServiceService, private route: ActivatedRoute ,private router: Router) { }

  ngOnInit(): void {
    this.getAnnalyseVs();
   
  }

  private getAnnalyseVs(){
    this.annalyseVService.getAnnalyseVList().subscribe(data => {
      this.annalyseVs = data;
    });

}


updateAnnalyse(id: any){
  this.router.navigate(['update-annalyse', id]);
}

deleteAnnalyse(id: any){
  this.annalyseService.deleteAnnalyse(id).subscribe( data => {
    console.log(data);
    this.getAnnalyseVs();
  })
}

}
