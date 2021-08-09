import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnnalyseV } from '../model/AnnlyseV';

@Injectable({
  providedIn: 'root'
})
export class AnnalyseVService {

 
  private host1 ="http://localhost:8080/GCM/ANNV/add";
  private host2 ="http://localhost:8080/GCM/ANNV/all";
  private host ="http://localhost:8080/GCM/ANNV";
  constructor(private httpClient:HttpClient) { }

  addAnnalyseV(annalyseV: AnnalyseV): Observable<Object>{

    return this.httpClient.post(`${this.host1}`, annalyseV);
  }
  getAnnalyseVList(): Observable<AnnalyseV[]>{
    return this.httpClient.get<AnnalyseV[]>(`${this.host2}`);
  }
  deleteAnnalyseV(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.host}/delete/${id}`);
  }
}
