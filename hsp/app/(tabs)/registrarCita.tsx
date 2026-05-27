import FormularioCitas from "@/screens/ScFormRegistroCita";

export default function CitasScreen() {

  const dato = [
  {
    "numeroIdentificacion": "70123",
    "primerNombre": "JHON",
    "segundoNombre": "ALEXANDER",
    "primerApellido": "CASTRO",
    "segundoApellido": "TORRES",
    "fechaNacimiento": "2002-02-15",
    "peso": "24.2",
    "telefono": "3001110022",
    "correoElectronico": "jhon@correo.com",
    "direccion": "Car. 10 #1-2",
    "profesion": "ingeniero",
    "antecedentes": "ninguno",
    "alergias": "ninguno",
    "fk_codigoMunicipio": "25307"
  }
]
  return (
    <FormularioCitas />
  );
}