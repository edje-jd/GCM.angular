import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdonanceMV } from '../model/OrdonanceMV';

@Injectable({
  providedIn: 'root'
})
export class OrdonanceMVService {

  private host1 ="http://localhost:8080/GCM/OMV/add";
  private host2 ="http://localhost:8080/GCM/OMV/all";
  

  constructor(private httpClient:HttpClient) { }

  addOrdonanceMV(ordonancemv: OrdonanceMV): Observable<Object>{

    return this.httpClient.post(`${this.host1}`, ordonancemv);
  }
  getOrdonanceMVList(): Observable<OrdonanceMV[]>{
    return this.httpClient.get<OrdonanceMV[]>(`${this.host2}`);
  }
}
