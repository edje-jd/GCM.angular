import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicament } from '../model/Medicament';

@Injectable({
  providedIn: 'root'
})
export class MedicamentService {
  private host1 ="http://localhost:8080/GCM/Medicament/add";
  private host2 ="http://localhost:8080/GCM/Medicament/all";
  private host ="http://localhost:8080/GCM/Medicament";
  constructor(private httpClient:HttpClient) { }

  addMedicament(medicament: Medicament): Observable<Object>{

    return this.httpClient.post(`${this.host1}`, medicament);
  }
  getMedicamentList(): Observable<Medicament[]>{
    return this.httpClient.get<Medicament[]>(`${this.host2}`);
  }
  deleteMedicament(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.host}/delete/${id}`);
  }
  getMedicamentById(id: number): Observable<Medicament>{
    return this.httpClient.get<Medicament>(`${this.host}/find/${id}`);
  }

  updateMedicament(id: number, medicament: Medicament): Observable<Object>{
    return this.httpClient.put(`${this.host}/${id}`, medicament);
  }
}
