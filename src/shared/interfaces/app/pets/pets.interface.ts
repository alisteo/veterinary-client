export interface Pet {
  id?: number;

  nombre_mascota: string;
  codigo_chip: string;
  lugar_implantacion: string;
  fecha_implantacion: string;
  especie: string;
  raza: string;
  pedigree: boolean;
  sexo: string;
  ubicacion: string;
  estado: string;
  tutorId: number;
  responsableId: number;
}
