import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hospitalisation } from '../model/Hospitalisation';

@Injectable({
  providedIn: 'root'
})
export class HospitalisationService {

  private host1 ="http://localhost:8082/GCM/Hospitalisation/add";
  private host2 ="http://localhost:8082/GCM/Hospitalisation/all";
  private host ="http://localhost:8082/GCM/Hospitalisation";
  constructor(private httpClient:HttpClient) { }

  addHospitalisation(hospitalisation: Hospitalisation): Observable<Object>{

    return this.httpClient.post(`${this.host1}`, hospitalisation);
  }
  getHospitalisationList(): Observable<Hospitalisation[]>{
    return this.httpClient.get<Hospitalisation[]>(`${this.host2}`);
  }
  deleteHospitalisation(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.host}/delete/${id}`);
  }
  getHospitalisationById(id: number): Observable<Hospitalisation>{
    return this.httpClient.get<Hospitalisation>(`${this.host}/${id}`);
  }

  updateHospitalisation(id: number, hospitalisation: Hospitalisation): Observable<Object>{
    return this.httpClient.put(`${this.host}/update`, hospitalisation);
  }
}
