import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ordonance } from 'src/app/model/Ordonance';
import { OrdonanceService } from 'src/app/_services/ordonance.service';

@Component({
  selector: 'app-update-ordonance',
  templateUrl: './update-ordonance.component.html',
  styleUrls: ['./update-ordonance.component.css']
})
export class UpdateOrdonanceComponent implements OnInit {

  id:any;
ordonance: Ordonance=new Ordonance();

  constructor(private ordonanceService :OrdonanceService, private route: ActivatedRoute, private router: Router
    ) { this.ordonance = history.state;}

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id'];
    this.ordonanceService.getOrdonanceById(this.id).subscribe(data => {
      this.ordonance = data;
    }, error => console.log(error));
  }
  onSubmit(){
    this.ordonanceService.updateOrdonance(this.id, this.ordonance).subscribe( data =>{
        this.goToOrdonanceList();
      }
      , error => console.log(error));
  }

  goToOrdonanceList(){
    this.router.navigate(['/listOrdonance']);
  }

}
