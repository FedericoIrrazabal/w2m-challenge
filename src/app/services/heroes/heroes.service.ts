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

  getAllHeroes(params:any): Observable<any> {
    return this.http.get(`${this.apiUrl}/heroes`,{params, observe: 'response'});
  }

  getHero(id:string): Observable<HeroInterface[]> {
    return this.http.get<HeroInterface[]>(`${this.apiUrl}/heroes?id=${id}`);
  }

  createHero(hero: HeroInterface): Observable<HeroInterface> {
    return this.http.post<HeroInterface>(`${this.apiUrl}/heroes`,  hero );
  }

  updateHero(id:string,hero: HeroInterface): Observable<HeroInterface> {
    return this.http.put<HeroInterface>(`${this.apiUrl}/heroes/${id}`,  hero );
  }

  deleteHero(id: number): Observable<HeroInterface> {
    return this.http.delete<HeroInterface>(`${this.apiUrl}/heroes/${id}`);
  }
}
