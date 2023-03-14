import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HeroInterface } from 'src/app/interfaces/hero-interface';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAllHeroes(params:any): Observable<HeroInterface[]> {
    return this.http.get<HeroInterface[]>(`${this.apiUrl}/heroes`,{params});
  }
}
