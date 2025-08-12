import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GamesService } from '../../services/games.service';
import { Games } from '../../models/games';


@Component({
  selector: 'app-view',
  imports: [CommonModule, FormsModule],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent implements OnInit {games: Games[] = [];
  gameSelecionado: Games | null = null;
  novoGame: Omit<Games, 'id'> = { nome: '', tipo: '', ano: null };

  constructor(private gamesService: GamesService) {}

  ngOnInit(): void {
    this.carregarGames();
  }

   carregarGames(): void {
    this.gamesService.getGames().subscribe((games) => {
      this.games = games;
    });
  }

    selecionarGame(id: number): void {
      this.gamesService.getGame(id).subscribe((games) => {
        this.gameSelecionado = games;
      })
    }

    salvarGames(): void {
      if (this.gameSelecionado) {
        this.atualizarGame();
      } else {
        this.criarGame();
      }
    }


  criarGame(): void {
    this.gamesService.criarGame(this.novoGame as Games).subscribe((game) => {
      this.games.push(game);
      this.novoGame = { nome: '', tipo: '', ano: null};
    });
  }

  atualizarGame(): void {
    if (this.gameSelecionado) {
      this.gamesService
        .atualizarGame(this.gameSelecionado.id!, this.gameSelecionado)
        .subscribe((game) => {
          const index = this.games.findIndex((p) => p.id === game.id);
          if (index !== -1) {
            this.games[index] = game;
          }
          this.gameSelecionado = null;
        });
    }
  }

  deletarGame(id: number): void {
    this.gamesService.deletarGame(id).subscribe(() => {
      this.games = this.games.filter((game) => game.id !== id);
      if (this.gameSelecionado?.id === id) {
        this.gameSelecionado = null;
      }
    });
  }

    
  //    selecionarGame(id: number): void {
  //   this.gamesService.getProduto(id).subscribe((games) => {
  //     this.gameSelecionado = games;
  //   })
  // }
  

}

