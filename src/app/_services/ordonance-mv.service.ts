import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdonanceMV } from '../model/OrdonanceMV';

@Injectable({
  providedIn: 'root'
})
export class OrdonanceMVService {

  private host1 ="http://localhost:8082/GCM/OMV/add";
  private host2 ="http://localhost:8082/GCM/OMV/all";
  private host ="http://localhost:8082/GCM/OMV" ;
  

  constructor(private httpClient:HttpClient) { }

  addOrdonanceMV(ordonancemv: OrdonanceMV): Observable<Object>{

    return this.httpClient.post(`${this.host1}`, ordonancemv);
  }
  getOrdonanceMVList(): Observable<OrdonanceMV[]>{
    return this.httpClient.get<OrdonanceMV[]>(`${this.host2}`);
  }
  deleteOrdonanceMV(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.host}/delete/${id}`);
  }
}
