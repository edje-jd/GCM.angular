import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PatientDesease } from '../model/PatientDesease';

@Injectable({
  providedIn: 'root'
})
export class PatientDeseaseService {

  private host1 ="http://localhost:8082/GCM/PA/add";
  private host2 ="http://localhost:8082/GCM/PA/all";
  private host ="http://localhost:8082/GCM/PA";

  constructor(private httpClient:HttpClient) { }

  addPatientDesease(pa: PatientDesease): Observable<Object>{

    return this.httpClient.post(`${this.host1}`, pa);
  }

  getPatientDeseaseList(): Observable<PatientDesease[]>{
    return this.httpClient.get<PatientDesease[]>(`${this.host2}`);
  }
  deletePatientDesease(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.host}/delete/${id}`);
  }
  getPatientDeseaseById(id: number): Observable<PatientDesease>{
    return this.httpClient.get<PatientDesease>(`${this.host}/find/${id}`);
  }

  updatePatientDesease(id: number, patientde: PatientDesease): Observable<Object>{
    return this.httpClient.put(`${this.host}/update`, patientde);
  }
  
}

