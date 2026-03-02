import { Component, Input } from '@angular/core';
import { Perfume } from '../../models/perfume.model';
import { CommonModule, NgIf } from '@angular/common'; // Import NgIf

@Component({
  selector: 'app-perfume-card',
  standalone: true,
  imports: [CommonModule, NgIf], // Use NgIf aqui
  templateUrl: 'perfume-card.html',
  styleUrls: ['perfume-card.css']
})
export class PerfumeCardComponent {
  @Input() perfume!: Perfume;
  imagemAtual: number = 0;

  get imagemAtualSrc(): string {
    return `assets/images/perfumes/${this.perfume.imagens[this.imagemAtual]}`;
  }

  proximaImagem() {
    if (this.imagemAtual < this.perfume.imagens.length - 1) {
      this.imagemAtual++;
    } else {
      this.imagemAtual = 0;
    }
  }

  imagemAnterior() {
    if (this.imagemAtual > 0) {
      this.imagemAtual--;
    } else {
      this.imagemAtual = this.perfume.imagens.length - 1;
    }
  }
}