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
    let filtrados = this.filtroAtivo === 'todos'
      ? this.perfumes
      : this.perfumes.filter(p => p.categoria === this.filtroAtivo);

    // Destaques primeiro, depois lançamentos
    return filtrados.sort((a, b) => {
      const aDest = a.destaque ? 1 : 0;
      const bDest = b.destaque ? 1 : 0;
      if (bDest !== aDest) return bDest - aDest;

      const aLanc = a.lancamento ? 1 : 0;
      const bLanc = b.lancamento ? 1 : 0;
      return bLanc - aLanc;
    });
  }

  filtrar(categoria: string) {
    this.filtroAtivo = categoria;
  }
}