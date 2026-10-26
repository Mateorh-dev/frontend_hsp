export type TypePacienteObject = {
  numeroIdentificacion: string;
  primerNombre: string;
  segundoNombre?: string | null;
  primerApellido: string;
  segundoApellido?: string | null;
  fechaNacimiento: string;
  telefono: string;
  correoElectronico?: string | null;
  direccion?: string | null;
  profesion?: string | null;
  estadoActivo: boolean;
}