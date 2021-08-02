import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medecin } from '../model/Medecin';

@Injectable({
  providedIn: 'root'
})
export class MedecinService {
  private host1 ="http://localhost:8080/GCM/Medecin/add";
  private host2 ="http://localhost:8080/GCM/Medecin/all";
  private host ="http://localhost:8080/GCM/Medecin";
  constructor(private httpClient:HttpClient) { }

  addMedecin(medecin: Medecin): Observable<Object>{

    return this.httpClient.post(`${this.host1}`, medecin);
  }
  getMedecinList(): Observable<Medecin[]>{
    return this.httpClient.get<Medecin[]>(`${this.host2}`);
  }
  deleteMedecin(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.host}/delete/${id}`);
  }
  getMedecinById(id: number): Observable<Medecin>{
    return this.httpClient.get<Medecin>(`${this.host}/find/${id}`);
  }

  updateMedecin(id: number, medecin: Medecin): Observable<Object>{
    return this.httpClient.put(`${this.host}/${id}`, medecin);
  }
}
