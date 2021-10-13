import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ordonance } from '../model/Ordonance';

@Injectable({
  providedIn: 'root'
})
export class OrdonanceService {

  
  private host1 ="http://localhost:8082/GCM/Ordonance/add";
  private host2 ="http://localhost:8082/GCM/Ordonance/all";
  private host ="http://localhost:8082/GCM/Ordonance";
  constructor(private httpClient:HttpClient) { }

  addOrdonance(ordonance: Ordonance): Observable<Object>{

    return this.httpClient.post(`${this.host1}`, ordonance);
  }
  getOrdonanceList(): Observable<Ordonance[]>{
    return this.httpClient.get<Ordonance[]>(`${this.host2}`);
  }
  deleteOrdonance(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.host}/delete/${id}`);
  }
  getOrdonanceById(id: number): Observable<Ordonance>{
    return this.httpClient.get<Ordonance>(`${this.host}/find/${id}`);
  }

  updateOrdonance(id: number, ordonance: Ordonance): Observable<Object>{
    return this.httpClient.put(`${this.host}/update`, ordonance);
  }
}
