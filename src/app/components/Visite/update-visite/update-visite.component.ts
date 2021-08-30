import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
// addVisite = this.fb.group({
//   date_visit: null,
//   objet_visit: null, 
//   type_visite: [null, Validators.required],
//   prix_cons: null, 
//   date_der_con: null,
//   effectue: null, 
//   medecinPH: [null, Validators.required]
 
// });
options = ['Consultation','Rend-Vous'];
  constructor( private fb: FormBuilder,private visiteService :VisiteService, private route: ActivatedRoute, private router: Router
    ) { this.visite = history.state; console.log(this.visite) 
     }

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
  // onClose() {
  
  //   this.dialogRef.close();
  // }
}
