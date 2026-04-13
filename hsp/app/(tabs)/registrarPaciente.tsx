import InputSimple from "@/components/InputSimple";
import InputFecha from "@/components/InputFecha";
import { ScrollView } from "react-native";

export default function PacientesScreen() {
  return (
    <ScrollView>
      <InputSimple>Primer nombre</InputSimple>
      <InputSimple>Segundo nombre</InputSimple>
      <InputSimple>Primer apellido</InputSimple>
      <InputSimple>Segundo apellido</InputSimple>
      <InputSimple teclado="numeric" limiteCaracteres={15}>No. identificación</InputSimple>
      <InputSimple>Lugar de expedición</InputSimple>
      <InputFecha>Fecha nacimiento</InputFecha>
      <InputSimple teclado="numeric" limiteCaracteres={5} palceholder="(kg)">Peso</InputSimple>
      <InputSimple teclado="numeric" limiteCaracteres={15} nombreIcono="call" posicionIcono="fuera">Telefono</InputSimple>
      <InputSimple teclado="numeric" limiteCaracteres={15} nombreIcono="call" posicionIcono="dentro">Telefono</InputSimple>
      <InputSimple teclado="email-address">Correo</InputSimple>
      <InputSimple>Direccion de residencia</InputSimple>
      <InputSimple>Profesion</InputSimple>
      <InputSimple espacioAmplio>Alergias</InputSimple>
      <InputSimple espacioAmplio>Antecedentes</InputSimple>

    </ScrollView>
  );
}