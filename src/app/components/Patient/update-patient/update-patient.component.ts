import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { patient } from 'src/app/model/Patient';
import { PatientService } from 'src/app/_services/patient.service';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {
id:any;
patient: patient=new patient();
addressForm: FormGroup  = this.fb.group({});

  constructor( @Inject(MAT_DIALOG_DATA) public data: {patient: patient}, private fb: FormBuilder,public dialogRef: MatDialogRef<UpdatePatientComponent>,private patientService :PatientService, private route: ActivatedRoute, private router: Router
    ) { 
      this.patient = data.patient;
      console.log("patient: ", this.patient )
     this.addressForm = this.fb.group({
        name: this.patient.name,
        phone: [this.patient.phone, Validators.required],
        age: [this.patient.age, Validators.required],
        sexe: [this.patient.sexe, Validators.required],
        
        adresse: [this.patient.adresse, Validators.required],
        antecedent:this.patient.antecedent,
        
        
      });
    }
  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id'];
    this.patientService.getPatientById(this.id).subscribe(data => {
    }, error => console.log(error));
  }
  onSubmit(){
    if(this.addressForm.status === "VALID"){
      this.updatePatient();
      this.dialogRef.close();
    } ;
  }


  updatePatient(){
    this.patient.name = this.addressForm?.controls.name.value;
    this.patient.phone = this.addressForm?.controls.phone.value;
    this.patient.sexe = this.addressForm?.controls.sexe.value;
    this.patient.adresse = this.addressForm?.controls.adresse.value;
    this.patient.age = this.addressForm?.controls.age.value;
    this.patient.antecedent = this.addressForm?.controls.antecedent.value;
    console.log("chewv 4e",this.patient);
    
    this.patientService.updatePatient(this.patient.id!, this.patient).subscribe( data =>{
      console.log("updated patient: ", this.patient)
    },  error => console.log(error));
  }

  goToPatientList(){
    this.router.navigate(['/listPatient']);
  }
  onClose() {
    // this.service.form.reset();
    // this.service.initializeFormGroup();
    this.dialogRef.close();}
  

}
