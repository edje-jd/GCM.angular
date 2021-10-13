import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Annalyse } from '../model/Annalyse';

@Injectable({
  providedIn: 'root'
})
export class AnnalyseServiceService {

  
  private host1 ="http://localhost:8082/GCM/Annalyse/add";
  private host2 ="http://localhost:8082/GCM/Annalyse/all";
  private host ="http://localhost:8082/GCM/Annalyse";
  constructor(private httpClient:HttpClient) { }

  addAnnalyse(annalyse: Annalyse): Observable<Object>{

    return this.httpClient.post(`${this.host1}`, annalyse);
  }
  getAnnalyseList(): Observable<Annalyse[]>{
    return this.httpClient.get<Annalyse[]>(`${this.host2}`);
  }
  deleteAnnalyse(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.host}/delete/${id}`);
  }
  getAnnalyseById(id: number): Observable<Annalyse>{
    return this.httpClient.get<Annalyse>(`${this.host}/${id}`);
  }

  updateAnnalyse(id: number, annalyse: Annalyse): Observable<Object>{
    return this.httpClient.put(`${this.host}/update`, annalyse);
  }
}
