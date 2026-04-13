import { colors } from "@/assets/colors";
import { dimensions } from "@/assets/dimensions";
import InputDesplegable from "@/components/InputDesplegable";
import InputSimple from "@/components/InputSimple";
import SubPagina from "@/components/SubPagina";
import Textos from "@/components/Textos";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native";

export default function TratamientosScreen() {
  return (
    <ScrollView>
      <SubPagina tituloPagina="Nuevo Tratamiento">
        <InputSimple teclado="numeric">No. identificación</InputSimple>
        <InputSimple>Nombre tratamiento</InputSimple>
      </SubPagina>
      <SubPagina tituloPagina="Seguimiento de Tratamiento">
        <InputSimple teclado="numeric">No. identificación</InputSimple>
        <InputSimple palceholder="(Cita/Control)">Tipo</InputSimple>
        {/* <InputSimple>Estado</InputSimple> */}
        <InputDesplegable opciones={["1","2","3","4","5"]} palceholder="Pendiente / Asistio / Reprogramo">Estado (Desplegable)</InputDesplegable>
        <InputSimple>Patologia</InputSimple>
        <InputSimple teclado="numeric">Precio</InputSimple>
        <InputSimple>Tratamiento</InputSimple>
        <InputSimple>Observaciones</InputSimple>
        <Textos>
          Registro Fotografico
        </Textos>
        <Ionicons
          name={"image-outline"}
          size={dimensions.figura.l}
          color={colors.primario}
        />
      </SubPagina>
    </ScrollView>
  );
}