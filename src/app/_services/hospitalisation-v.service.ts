import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HospitalisationV } from '../model/HospitalisationV';

@Injectable({
  providedIn: 'root'
})
export class HospitalisationVService {

  private host1 ="http://localhost:8080/GCM/HOV/add";
  private host2 ="http://localhost:8080/GCM/HOV/all";
  private host ="http://localhost:8080/GCM/HOV";
  

  constructor(private httpClient:HttpClient) { }

  addHospitalisationV(hospitalisationV: HospitalisationV): Observable<Object>{

    return this.httpClient.post(`${this.host1}`, hospitalisationV);
  }
  getHospitalisationVList(): Observable<HospitalisationV[]>{
    return this.httpClient.get<HospitalisationV[]>(`${this.host2}`);
  }
    deleteHospitalisationV(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.host}/delete/${id}`);
  }
  getHospitalisationVById(id: number): Observable<HospitalisationV>{
    return this.httpClient.get<HospitalisationV>(`${this.host}/find/${id}`);
  }

  updateHospitalisationV(id: number, hospitalisationV: HospitalisationV): Observable<Object>{
    return this.httpClient.put(`${this.host}/update`, hospitalisationV);
  }
}
