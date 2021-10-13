import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Antecedent } from '../model/Antecedent';

@Injectable({
  providedIn: 'root'
})
export class AntecedentService {
  private host1 ="http://localhost:8082/GCM/Antecedent/add";
  private host2 ="http://localhost:8082/GCM/Antecedent/all";
  private host ="http://localhost:8082/GCM/Antecedent";

  constructor(private httpClient:HttpClient) { }

  addAntecedent(antecedent: Antecedent): Observable<Object>{

    return this.httpClient.post(`${this.host1}`, antecedent);
  }
  getAntecedentList(): Observable<Antecedent[]>{
    return this.httpClient.get<Antecedent[]>(`${this.host2}`);
  }
  deleteAntecedent(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.host}/delete/${id}`);
  }
  getAntecedentById(id: number): Observable<Antecedent>{
    return this.httpClient.get<Antecedent>(`${this.host}/find/${id}`);
  }

  updateAntecedent(id: number, antecedent: Antecedent): Observable<Object>{
    return this.httpClient.put(`${this.host}/update`, antecedent);
  }

}
