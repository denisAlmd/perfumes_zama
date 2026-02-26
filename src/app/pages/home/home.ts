import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfumeCardComponent } from '../../components/perfume-card/perfume-card'
import { Perfume } from '../../models/perfume.model';

import * as perfumesData from '../../data/perfumes.json';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PerfumeCardComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {
  perfumes: Perfume[] = [];
  filtroAtivo: string = 'todos';

  ngOnInit() {
    // Carrega os dados do JSON
    this.perfumes = (perfumesData as any).default || perfumesData;
  }

  get perfumesFiltrados() {
    if (this.filtroAtivo === 'todos') {
      return this.perfumes;
    }
    return this.perfumes.filter(p => p.categoria === this.filtroAtivo);
  }

  filtrar(categoria: string) {
    this.filtroAtivo = categoria;
  }
}