import InputSimple from "@/components/InputSimple";
import { ScrollView } from "react-native";

export default function PacientesScreen() {
  return (
    <ScrollView>
      <InputSimple>Primer nombre</InputSimple>
      <InputSimple>Segundo nombre</InputSimple>
      <InputSimple>Primer apellido</InputSimple>
      <InputSimple>Segundo apellido</InputSimple>
      <InputSimple>No. identificación</InputSimple>
      <InputSimple>Lugar de expedición</InputSimple>
      <InputSimple>Fecha nacimiento</InputSimple>
      <InputSimple palceholder="(kg)">Peso</InputSimple>
      <InputSimple>Telefno</InputSimple>
      <InputSimple>Correo</InputSimple>
      <InputSimple>Direccion de residencia</InputSimple>
      <InputSimple>Profesion</InputSimple>
      <InputSimple>Alergias</InputSimple>
      <InputSimple>Antecedentes</InputSimple>

    </ScrollView>
  );
}