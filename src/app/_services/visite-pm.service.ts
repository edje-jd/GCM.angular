import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VisitePM } from '../model/VisitePM';

@Injectable({
  providedIn: 'root'
})
export class VisitePMService {

  private host1 ="http://localhost:8080/GCM/VP/add";
  private host2 ="http://localhost:8080/GCM/VPM/all";
  private host ="http://localhost:8080/GCM/Patient";

  constructor(private httpClient:HttpClient) { }

  addVisitePM(visitepm: VisitePM): Observable<Object>{

    console.log(visitepm);
    
    return this.httpClient.post(`${this.host1}`, visitepm);
  }

  getVisitePMList(): Observable<VisitePM[]>{
    return this.httpClient.get<VisitePM[]>(`${this.host2}`);
  }
}
