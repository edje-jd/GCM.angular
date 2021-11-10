import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { patient } from 'src/app/model/Patient';

@Component({
  selector: 'app-patiental',
  templateUrl: './patiental.component.html',
  styleUrls: ['./patiental.component.css']
})
export class PatientalComponent implements OnInit {
  alerte: boolean=false;
  patient:patient;
  constructor(private router :Router) {this.patient=history.state; 
  console.log(this.patient)}

  ngOnInit(): void {

  }
  PatientDetails(patient: patient){
    this.router.navigate(['patient-details'],{state:patient});
  }
  closeAlerte(){
    this.alerte=false
  }
}
