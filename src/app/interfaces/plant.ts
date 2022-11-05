export namespace Plant {
  export interface Request {
    id: number;
    nombre_comun: string;
    nombre_cientifico: string;
    tipo: 'Interior' | 'Exterior';
    altura_maxima: number;
    clima: string;
    sustrato_siembra: string;
  }
}
