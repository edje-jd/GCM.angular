import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MedecinPH } from '../model/MedecinPH';

@Injectable({
  providedIn: 'root'
})
export class MedecinPHService {

  private host1 ="http://localhost:8082/GCM/MedecinPH/add";
  private host2 ="http://localhost:8082/GCM/MedecinPH/all";
  private host ="http://localhost:8082/GCM/MedecinPH";
  

  constructor(private httpClient:HttpClient) { }

  addMedecinPh(medePh: MedecinPH): Observable<Object>{

    return this.httpClient.post(`${this.host1}`, medePh);
  }
  getMedecinPhList(): Observable<MedecinPH[]>{
    return this.httpClient.get<MedecinPH[]>(`${this.host2}`);
  }
  deleteMedecinPH(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.host}/delete/${id}`);
  }
  getMedecinPHById(id: number): Observable<MedecinPH>{
    return this.httpClient.get<MedecinPH>(`${this.host}/find/${id}`);
  }

  updateMedecinPH(id: number, medecinph: MedecinPH): Observable<Object>{
    return this.httpClient.put(`${this.host}/update`, medecinph);
  }
}
