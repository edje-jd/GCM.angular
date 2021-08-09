import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hospitalisation } from 'src/app/model/Hospitalisation';
import { HospitalisationService } from 'src/app/_services/hospitalisation.service';

@Component({
  selector: 'app-update-hospitalisation',
  templateUrl: './update-hospitalisation.component.html',
  styleUrls: ['./update-hospitalisation.component.css']
})
export class UpdateHospitalisationComponent implements OnInit {

  id:any;
hospitalisation: Hospitalisation=new Hospitalisation();

  constructor(private hospitalisationService :HospitalisationService, private route: ActivatedRoute, private router: Router
    ) { this.hospitalisation = history.state;}

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id'];
    this.hospitalisationService.getHospitalisationById(this.id).subscribe(data => {
      this.hospitalisation = data;
    }, error => console.log(error));
  }
  onSubmit(){
    this.hospitalisationService.updateHospitalisation(this.id, this.hospitalisation).subscribe( data =>{
        this.goToHospitalisationList();
      }
      , error => console.log(error));
  }

  goToHospitalisationList(){
    this.router.navigate(['/listHospitalisation']);
  }
}
