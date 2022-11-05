import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Plant } from '../interfaces/plant';

@Injectable({
  providedIn: 'root',
})
export class PlantService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getPlants(): Observable<Plant.Request[]> {
    return this.http.get<Plant.Request[]>(this.baseUrl);
  }
}
