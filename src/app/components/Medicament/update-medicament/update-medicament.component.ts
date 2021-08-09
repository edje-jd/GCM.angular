import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicament } from 'src/app/model/Medicament';
import { MedicamentService } from 'src/app/_services/medicament.service';

@Component({
  selector: 'app-update-medicament',
  templateUrl: './update-medicament.component.html',
  styleUrls: ['./update-medicament.component.css']
})
export class UpdateMedicamentComponent implements OnInit {

  id:any;
  medicament: Medicament=new Medicament();
  
    constructor(private medicamentService :MedicamentService, private route: ActivatedRoute, private router: Router
      ) { this.medicament = history.state; }
  
    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.medicamentService.getMedicamentById(this.id).subscribe(data => {
        this.medicament = data;
      }, error => console.log(error));
     
    }
    onSubmit(){
      this.medicamentService.updateMedicament(this.id, this.medicament).subscribe( data =>{
          this.goToMedicamentList();
        }
        , error => console.log(error));
    }
  
    goToMedicamentList(){
      this.router.navigate(['/listMedicament']);
    }

}
