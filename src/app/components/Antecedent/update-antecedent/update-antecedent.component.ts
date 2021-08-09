import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Antecedent } from 'src/app/model/Antecedent';
import { AntecedentService } from 'src/app/_services/antecedent.service';

@Component({
  selector: 'app-update-antecedent',
  templateUrl: './update-antecedent.component.html',
  styleUrls: ['./update-antecedent.component.css']
})
export class UpdateAntecedentComponent implements OnInit {

  id:any;
antecdent: Antecedent=new Antecedent();

  constructor(private antecedentService :AntecedentService, private route: ActivatedRoute, private router: Router
    ) { this.antecdent = history.state; }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.antecedentService.getAntecedentById(this.id).subscribe(data => {
      this.antecdent = data;
    }, error => console.log(error));
   
  }
  onSubmit(){
    this.antecedentService.updateAntecedent(this.id, this.antecdent).subscribe( data =>{
        this.goToAntecedentList();
      }
      , error => console.log(error));
  }

  goToAntecedentList(){
    this.router.navigate(['/listAntecedent']);
  }

}
