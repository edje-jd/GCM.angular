import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MedecinPH } from '../model/MedecinPH';

@Injectable({
  providedIn: 'root'
})
export class MedecinPHService {

  private host1 ="http://localhost:8080/GCM/MedecinPH/add";
  private host2 ="http://localhost:8080/GCM/MedecinPH/all";
  

  constructor(private httpClient:HttpClient) { }

  addMedecinPh(medePh: MedecinPH): Observable<Object>{

    return this.httpClient.post(`${this.host1}`, medePh);
  }
  getMedecinPhList(): Observable<MedecinPH[]>{
    return this.httpClient.get<MedecinPH[]>(`${this.host2}`);
  }
}
