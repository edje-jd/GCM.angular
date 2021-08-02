import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Localisation } from '../model/Localisation';

@Injectable({
  providedIn: 'root'
})
export class LocalisationService {
  private host1 ="http://localhost:8080/GCM/Localisation/add";
  private host2 ="http://localhost:8080/GCM/Localisation/all";
  private host ="http://localhost:8080/GCM/Localisation";

  constructor(private httpClient:HttpClient) { }

  
  addLocalisation(localisation: Localisation): Observable<Object>{

    return this.httpClient.post(`${this.host1}`, localisation);
  }

  getLocalisationList(): Observable<Localisation[]>{
    return this.httpClient.get<Localisation[]>(`${this.host2}`);
  }
  deleteLocalisation(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.host}/delete/${id}`);
  }
  getLocalisationById(id: number): Observable<Localisation>{
    return this.httpClient.get<Localisation>(`${this.host}/find/${id}`);
  }

  updateLocalisation(id: number, localisation: Localisation): Observable<Object>{
    return this.httpClient.put(`${this.host}/${id}`, localisation);
  }
}
