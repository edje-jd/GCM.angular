import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Annalyse } from 'src/app/model/Annalyse';
import { AnnalyseV } from 'src/app/model/AnnlyseV';
import { AnnalyseServiceService } from 'src/app/_services/annalyse-service.service';

@Component({
  selector: 'app-update-annalyse',
  templateUrl: './update-annalyse.component.html',
  styleUrls: ['./update-annalyse.component.css']
})
export class UpdateAnnalyseComponent implements OnInit {
  id:any;
  annalyse: Annalyse=new Annalyse();
  
  updateAnls: FormGroup  = this.fb.group({});
  
    constructor(@Inject(MAT_DIALOG_DATA) public data: {annalyse: Annalyse},public dialogRef: MatDialogRef<UpdateAnnalyseComponent>,private annalyseVService:AnnalyseServiceService, private fb: FormBuilder,private annalyseService :AnnalyseServiceService, private route: ActivatedRoute, private router: Router,
      ) { 
        this.annalyse = this.data.annalyse;
         console.log("annalyse", this.annalyse)
        this.updateAnls = this.fb.group({
          dateAnls: this.annalyse.dateAnls,
          nomAnls: [this.annalyse.nomAnls, Validators.required], 
          res_Ana:this.annalyse.res_Ana, 
          nom_labo: [this.annalyse.nom_labo, Validators.required],
          // resul_ana:null, 
          
          
         
        });
      }
  
    ngOnInit(): void {
      
      this.id = this.route.snapshot.params['id'];
      this.annalyseService.getAnnalyseById(this.id).subscribe(data => {
        this.annalyse = data;
      }, error => console.log(error));
    }
    updateAnnalyse(){
      this.annalyse.dateAnls = this.updateAnls.controls.dateAnls.value;
      this.annalyse.nomAnls = this.updateAnls.controls.nomAnls.value;
      this.annalyse.res_Ana = this.updateAnls.controls.res_Ana.value;
      this.annalyse.nom_labo = this.updateAnls.controls.nom_labo.value;
      console.log("enchewv",this.annalyse);
      this.annalyseVService.updateAnnalyse(this.annalyse.id,this.annalyse).subscribe( data =>{
          console.log("update annalyse",this.annalyse);
  ;
        },
        error => console.log(error));
    }
    onSubmit(){
    
    

      if(this.updateAnls.status === "VALID"){
        
        this.updateAnnalyse();;
        this.dialogRef.close();
      } ;
    }
    goToAnnalyseList(){
      this.router.navigate(['/listAnnalyse']);
    }

    onClose() {
      // this.service.form.reset();
      // this.service.initializeFormGroup();
      this.dialogRef.close();}

}
