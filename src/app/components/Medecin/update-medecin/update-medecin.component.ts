import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medecin } from 'src/app/model/Medecin';
import { MedecinPH } from 'src/app/model/MedecinPH';
import { Phoraire } from 'src/app/model/Phoraire';
import { MedecinPHService } from 'src/app/_services/medecin-ph.service';
import { MedecinService } from 'src/app/_services/medecin.service';
import { PhoraireService } from 'src/app/_services/phoraire.service';

@Component({
  selector: 'app-update-medecin',
  templateUrl: './update-medecin.component.html',
  styleUrls: ['./update-medecin.component.css']
})
export class UpdateMedecinComponent implements OnInit {

  id:any;
  medecin: Medecin=new Medecin();
  plage_Horaires!:Phoraire[];
    constructor(private medecinService :MedecinService, private route: ActivatedRoute,private phoraireService:PhoraireService, private router: Router
      ) { this.medecin = history.state; }
  
    ngOnInit(): void {
      this.getlistPhoraires()
      this.id = this.route.snapshot.params['id'];
      this.medecinService.getMedecinById(this.id).subscribe(data => {
        this.medecin = data;
      }, error => console.log(error));
     
    }
    getlistPhoraires(){
      this.phoraireService.getPhoraireList().subscribe(data=>{
      this.plage_Horaires=data;
      })
       }
    onSubmit(){
      this.medecinService.updateMedecin(this.id, this.medecin).subscribe( data =>{
          this.goToMedecinList();
        }
        , error => console.log(error));
    }
  
    goToMedecinList(){
      this.router.navigate(['/listMedecin']);
    }


}
