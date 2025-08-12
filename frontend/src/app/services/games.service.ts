import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Games } from '../models/games';

@Injectable({
  providedIn: 'root'
})

export class GamesService {

  private apiUrl = 'http://localhost:3000/games';

  constructor(private http: HttpClient) { }

  // GET Todos os Games
  getGames(): Observable<Games[]> {
    return this.http.get<Games[]>(this.apiUrl);
  }

  // GET Games por ID
  getGame(id: number): Observable<Games> {
    return this.http.get<Games>(`${this.apiUrl}/${id}`);
  }

  // POST Criar Games
  criarGame(game: Games): Observable<Games> {
    return this.http.post<Games>(this.apiUrl, game);
  }

  // PATCH Atualizar Games
  atualizarGame(id: number, game: Games): Observable<Games> {
    return this.http.patch<Games>(`${this.apiUrl}/${id}`, game);
  }

  // DELETE Remover Games
  deletarGame(id: number): Observable<Games> {
    return this.http.delete<Games>(`${this.apiUrl}/${id}`);
  }
}
