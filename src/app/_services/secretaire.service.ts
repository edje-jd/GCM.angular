import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Secretaire } from '../model/Secretaire';

@Injectable({
  providedIn: 'root'
})
export class SecretaireService {

  private host1 ="http://localhost:8082/GCM/Secretaire/add";
  private host2 ="http://localhost:8082/GCM/Secretaire/all";
  private host ="http://localhost:8082/GCM/Secretaire";

  constructor(private httpClient:HttpClient) { }

  
  addSecretaire(secretaire: Secretaire): Observable<Object>{

    return this.httpClient.post(`${this.host1}`, secretaire);
  }

  getSecretaireList(): Observable<Secretaire[]>{
    return this.httpClient.get<Secretaire[]>(`${this.host2}`);
  }
  deleteSecretaire(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.host}/delete/${id}`);
  }
  getSecretaireById(id: number): Observable<Secretaire>{
    return this.httpClient.get<Secretaire>(`${this.host}/find/${id}`);
  }

  updateSecretaire(id: number, secretaire: Secretaire): Observable<Object>{
    return this.httpClient.put(`${this.host}/${id}`, secretaire);
  }
}
