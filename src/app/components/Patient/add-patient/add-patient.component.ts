import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Antecedent } from 'src/app/model/Antecedent';
import { Localisation } from 'src/app/model/Localisation';
import { patient } from 'src/app/model/Patient';
import { AntecedentService } from 'src/app/_services/antecedent.service';
import { LocalisationService } from 'src/app/_services/localisation.service';
import { PatientService } from 'src/app/_services/patient.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { PatientDesease } from 'src/app/model/PatientDesease';
import { PatientDeseaseService } from 'src/app/_services/patient-desease.service';
import { MatDialogRef } from '@angular/material/dialog';
import { NodeWithI18n } from '@angular/compiler';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  patient: patient = new patient();
  antcedents!: Antecedent[];
  antcedent :Antecedent = new Antecedent();
  localisations?:Localisation[];
  localisation!:Localisation;
  id?:any;
  patientDesease: PatientDesease = new PatientDesease();
  options = ['Homme','Femme'];
    

    addressForm = this.fb.group({
      name: null,
      phone: [null, Validators.required],
      age: [null, Validators.required],
      sexe: [null, Validators.required],
      
      adresse: [null, Validators.required],
      antecedent:null,
      
      
    });
    
  

 
  
  constructor(private fb: FormBuilder,public dialogRef: MatDialogRef<AddPatientComponent>,private patientservice: PatientService,private router: Router ,private antecedentService:AntecedentService,private localisationService:LocalisationService, private patientDeseaseService: PatientDeseaseService) { }

  ngOnInit(): void {
   
    this.getlistAntecedents();
    this.getlistLocalisations();
   
  }
savePatient
  (){
   
          
  
  //  console.log(this.patient);
  // this.patient==this.addressForm;
  this.patient.name = this.addressForm.controls.name.value;
  this.patient.age = this.addressForm.controls.age.value;
  this.patient.phone = this.addressForm.controls.phone.value;
  this.patient.sexe =  this.addressForm.controls.sexe.value;
  this.patient.adresse =  this.addressForm.controls.adresse.value;
  this.patient.antecedent =  this.addressForm.controls.antecedent.value;
  
  console.log("patient: ", this.patient)

    
    this.patientservice.addPatient(this.patient).subscribe(data => {
      console.log(data)
       this.PatientDetails(data);
        // this.goToPatientList();
      },
      error => console.log(error));
     
  }
  goToPatientList(){
    this.router.navigate(['/listPatient']);
  }
  getlistAntecedents(){
    this.antecedentService.getAntecedentList().subscribe(data=>{
    this.antcedents=data;
    })
    }
    PatientDetails(patient: patient){
      this.router.navigate(['patient-details'],{state:patient});
    }

    onClose() {
      // this.service.form.reset();
      // this.service.initializeFormGroup();
      this.dialogRef.close();
    }
    changePosition() {
      this.dialogRef.updatePosition({ top: '50px', left: '50px' });
  }

 getlistLocalisations(){
      this.localisationService.getLocalisationList().subscribe(data=>{
      this.localisations=data;
      })
       }
  onSubmit(){
    
    
    
  if(this.addressForm.status === "VALID"){
    this.savePatient();
    this.dialogRef.close();
  } 
  }
  Retour(){
    window.history.back();
  }

  

}

// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { Antecedent } from 'src/app/model/Antecedent';
// import { Localisation } from 'src/app/model/Localisation';
// import { patient } from 'src/app/model/Patient';
// import { AntecedentService } from 'src/app/_services/antecedent.service';
// import { LocalisationService } from 'src/app/_services/localisation.service';
// import { PatientService } from 'src/app/_services/patient.service';
// import {FormControl, FormGroup, Validators} from '@angular/forms';
// import {Observable} from 'rxjs';
// import {map, startWith} from 'rxjs/operators';
// import { PatientDesease } from 'src/app/model/PatientDesease';
// import { PatientDeseaseService } from 'src/app/_services/patient-desease.service';

// @Component({
//   selector: 'app-add-patient',
//   templateUrl: './add-patient.component.html',
//   styleUrls: ['./add-patient.component.css']
// })
// export class AddPatientComponent implements OnInit {
 
//   patient!: patient ;
//   antcedents!: Antecedent[];
//   antcedent !:Antecedent ;
//   localisations?:Localisation[];
//   localisation!:Localisation;
//   id?:any;
//   patientDesease!: PatientDesease ;
//   options = ['Homme','Femme'];
//   form = new FormGroup({
//      name : new FormControl('',Validators.required),
//      phone :new FormControl('',Validators.required)
//   }) 
  
//   constructor(private patientservice: PatientService,private router: Router ,private antecedentService:AntecedentService,private localisationService:LocalisationService, private patientDeseaseService: PatientDeseaseService) {
   
//    }

//   ngOnInit(): void {
//     // this.getlistAntecedents();
//     // this.getlistLocalisations();
//   }
// savePatient
//   (){

//     this.patientDeseaseService.addPatientDesease(this.patientDesease).subscribe(data => {
//       console.log(data)

//         this.goToPatientList();
//       },
//       error => console.log(error));
     
//   }
//   goToPatientList(){
//     this.router.navigate(['/listPatient']);
//   }
//   getlistAntecedents(){
//     this.antecedentService.getAntecedentList().subscribe(data=>{
//     this.antcedents=data;
//     })
//     }

//  getlistLocalisations(){
//       this.localisationService.getLocalisationList().subscribe(data=>{
//       this.localisations=data;
//       })
//        }
//   onSubmit(){
//     this.patientDesease.patient= this.patient;
//     this.patientDesease.antcedent= this.antcedent;
   
//     this.patientDesease.localisation=this.localisation
    
//     this.savePatient();
//   }
 
//   Retour(){
//     window.history.back();
//   }

  

// }
