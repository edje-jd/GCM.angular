import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
// addressForm = this.fb.group({
//   name: null,
//   phone: [null, Validators.required],
//   age: [null, Validators.required],
//   sexe: [null, Validators.required],
  
//   adresse: [null, Validators.required],
//   antecedent:null,
  
  
// });

  constructor(private fb: FormBuilder,private patientService :PatientService, private route: ActivatedRoute, private router: Router
    ) { 
      this.patient = history.state; console.log(this.patient)}

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id'];
    this.patientService.getPatientById(this.id).subscribe(data => {
      this.patient = data;
    }, error => console.log(error));
  }
  onSubmit(){
    this.patientService.updatePatient(this.id, this.patient).subscribe( data =>{
        this.goToPatientList();
      }
      , error => console.log(error));
  }

  goToPatientList(){
    this.router.navigate(['/listPatient']);
  }
  // onClose() {
  //   // this.service.form.reset();
  //   // this.service.initializeFormGroup();
  //   this.dialogRef.close();
  

}
