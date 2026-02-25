export interface Perfume {
  id: number;
  nome: string;
  marca: string;
  categoria: 'masculino' | 'feminino' | 'unissex';
  preco: number;
  descricao: string;
  imagens: string[];
  nota: number;
  destaque?: boolean;
  lancamento?: boolean;
}