import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Antecedent } from 'src/app/model/Antecedent';
import { AntecedentService } from 'src/app/_services/antecedent.service';

@Component({
  selector: 'app-add-antecedent',
  templateUrl: './add-antecedent.component.html',
  styleUrls: ['./add-antecedent.component.css']
})
export class AddAntecedentComponent implements OnInit {
  antecedent : Antecedent= new Antecedent();

  constructor(private antecedentService: AntecedentService,private router: Router ,private rout:ActivatedRoute) { }

  ngOnInit(): void {
  }
  saveAntecedent(){
    this.antecedentService.addAntecedent(this.antecedent).subscribe( data =>{
        console.log(data);

        this.goToAntecedentList();
      },
      error => console.log(error));
  }
  goToAntecedentList(){
    this.router.navigate(['/listAntecedent']);
  }
  onSubmit(){
    console.log(this.antecedent);
    this.saveAntecedent();
  }

}
