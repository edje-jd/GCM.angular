import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { patient } from '../model/Patient';

  
 

  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private host1 ="http://localhost:8082/GCM/Patient/add";
  private host2 ="http://localhost:8082/GCM/Patient/all";
  private host ="http://localhost:8082/GCM/Patient";
  constructor(private httpClient:HttpClient) { }

  addPatient(Patient: patient): Observable<Object>{

    return this.httpClient.post(`${this.host1}`, Patient);
  }
  getPatientList(): Observable<patient[]>{
    return this.httpClient.get<patient[]>(`${this.host2}`);
  }
  deletePatient(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.host}/delete/${id}`);
  }
  getPatientById(id: number): Observable<patient>{
    return this.httpClient.get<patient>(`${this.host}/find/${id}`);
  }

  updatePatient(id: number, patient: patient): Observable<Object>{
    return this.httpClient.put(`${this.host}/update`, patient);
  }
}
