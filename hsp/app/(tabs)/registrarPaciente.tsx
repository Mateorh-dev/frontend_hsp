import InputSimple from "@/components/InputSimple";
// import InputFecha from "@/components/InputFecha";
import { ScrollView } from "react-native";

export default function PacientesScreen() {
  return (
    <ScrollView>
      <InputSimple>Primer nombre</InputSimple>
      <InputSimple>Segundo nombre</InputSimple>
      <InputSimple>Primer apellido</InputSimple>
      <InputSimple>Segundo apellido</InputSimple>
      <InputSimple teclado="numeric" limiteCaracteres={15}>No. identificación</InputSimple>
      <InputSimple nombreIcono="map" posicionIcono="fuera">Lugar de expedición</InputSimple>
      {/* <InputFecha >Fecha nacimiento</InputFecha> nombreIcono="calendar" posicionIcono="fuera" */}
      <InputSimple teclado="numeric" limiteCaracteres={5} palceholder="(kg)">Peso</InputSimple>
      <InputSimple teclado="numeric" limiteCaracteres={15} nombreIcono="call" posicionIcono="fuera">Telefono</InputSimple>
      <InputSimple teclado="email-address" nombreIcono="mail" posicionIcono="fuera">Correo</InputSimple>
      <InputSimple>Direccion de residencia</InputSimple>
      <InputSimple>Profesion</InputSimple>
      <InputSimple espacioAmplio>Alergias</InputSimple>
      <InputSimple espacioAmplio>Antecedentes</InputSimple>

    </ScrollView>
  );
}