import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Phoraire } from '../model/Phoraire';

@Injectable({
  providedIn: 'root'
})
export class PhoraireService {

  private host1 ="http://localhost:8082/GCM/PHoraire/add";
  private host2 ="http://localhost:8082/GCM/PHoraire/all";
  private host ="http://localhost:8082/GCM/PHoraire";

  constructor(private httpClient:HttpClient) { }
  addPhoraire(phoraire: Phoraire): Observable<Object>{

    return this.httpClient.post(`${this.host1}`, phoraire);
  }

  getPhoraireList(): Observable<Phoraire[]>{
    return this.httpClient.get<Phoraire[]>(`${this.host2}`);
  }
  deletePhoraire(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.host}/delete/${id}`);
  }
  getPhoraireById(id: number): Observable<Phoraire>{
    return this.httpClient.get<Phoraire>(`${this.host}/find/${id}`);
  }

  updatePhoraire(id: number, phoraire: Phoraire): Observable<Object>{
    return this.httpClient.put(`${this.host}/${id}`, phoraire);
  }
}
