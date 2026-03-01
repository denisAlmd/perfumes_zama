export interface Perfume {
  id: number;
  nome: string;
  marca: string;
  categoria: string;
  volume: string;
  descricao?: string;
  imagens: string[];
  nota: number;
  notas_saida?: string;
  notas_coracao?: string;
  notas_fundo?: string;
  destaque?: boolean;
  lancamento?: boolean;
  fixacao?: string;
  projecao?: string;
}