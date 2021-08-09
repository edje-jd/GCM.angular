import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Visite } from '../model/Visite';

@Injectable({
  providedIn: 'root'
})
export class VisiteService {

  private host1 ="http://localhost:8080/GCM/Visite/add";
  private host2 ="http://localhost:8080/GCM/Visite/all";
  private host ="http://localhost:8080/GCM/Visite";

  constructor(private httpClient:HttpClient) { }

  
  addVisite(visite: Visite): Observable<Object>{

    return this.httpClient.post(`${this.host1}`, visite);
  }

  getVisiteList(): Observable<Visite[]>{
    return this.httpClient.get<Visite[]>(`${this.host2}`);
  }
  deleteVisite(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.host}/delete/${id}`);
  }
  getVisiteById(id: number): Observable<Visite>{
    return this.httpClient.get<Visite>(`${this.host}/find/${id}`);
  }

   updateVisite(id: number, visite: Visite): Observable<Object>{
    return this.httpClient.put(`${this.host}/update`, visite);
  }
}
