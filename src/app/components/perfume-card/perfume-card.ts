import { Component, Input } from '@angular/core';
import { Perfume } from '../../models/perfume.model';

@Component({
  selector: 'app-perfume-card',
  templateUrl: './perfume-card.html',
  styleUrls: ['./perfume-card.css']
})
export class PerfumeCardComponent {
  @Input() perfume!: Perfume;
  imagemAtual: number = 0;

  // Pega a imagem atual baseada no índice
  get imagemAtualSrc(): string {
    return `assets/images/perfumes/${this.perfume.imagens[this.imagemAtual]}`;
  }

  // Avança para próxima imagem
  proximaImagem() {
    if (this.imagemAtual < this.perfume.imagens.length - 1) {
      this.imagemAtual++;
    } else {
      this.imagemAtual = 0; // Volta para primeira
    }
  }

  // Volta para imagem anterior
  imagemAnterior() {
    if (this.imagemAtual > 0) {
      this.imagemAtual--;
    } else {
      this.imagemAtual = this.perfume.imagens.length - 1; // Vai para última
    }
  }
}