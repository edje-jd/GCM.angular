import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Visite } from 'src/app/model/Visite';
import { VisiteService } from 'src/app/_services/visite.service';

@Component({
  selector: 'app-update-visite',
  templateUrl: './update-visite.component.html',
  styleUrls: ['./update-visite.component.css']
})
export class UpdateVisiteComponent implements OnInit {

  id:any;
visite: Visite=new Visite();
form = new FormGroup({
  type_visite : new FormControl('',Validators.required),
  date_visit :new FormControl('',Validators.required)
  
})
options = ['Consultation','Rend-Vous'];

  constructor(private visiteService :VisiteService, private route: ActivatedRoute, private router: Router
    ) { this.visite = history.state; }

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id'];
    this.visiteService.getVisiteById(this.id).subscribe(data => {
      this.visite = data;
    }, error => console.log(error));
  }
  onSubmit(){
    this.visiteService.updateVisite(this.id, this.visite).subscribe( data =>{
        this.goToVisiteList();
      }
      , error => console.log(error));
  }

  goToVisiteList(){
    this.router.navigate(['/listVisite']);
  }

}
