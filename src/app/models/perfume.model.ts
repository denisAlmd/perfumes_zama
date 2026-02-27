export interface Perfume {
  id: number;
  nome: string;
  marca: string;
  categoria: 'masculino' | 'feminino' | 'unissex';
  volume: string;
  preco: number;
  descricao: string;
  imagens: string[];
  nota: number;
  destaque?: boolean;
  lancamento?: boolean;
}