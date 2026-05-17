import { colors } from "@/assets/colors";
import { dimensions } from "@/assets/dimensions";
import { styles } from "@/assets/styles";
import InputDesplegable from "@/components/InputDesplegable";
import InputFecha from "@/components/InputFecha";
import InputSimple from "@/components/InputSimple";
import SeparadorHorizontal from "@/components/SeparadorHorizontal";
import SubPagina from "@/components/SubPagina";
import Textos from "@/components/Textos";
import api from "@/src/configAxios";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";

export default function TratamientosScreen() {
  const [listaEstados, actualizarListaEstados] = useState<string[]>([]);
  const gapiEstado = async () => {
    const resultado = await api.get("selectall/estado?pagina=1");
    actualizarListaEstados(resultado.data.map((item: any) => item.nombreEstado));
  }
  useEffect(() => { gapiEstado(); }, []);
  return (
    <ScrollView>
      <SubPagina tituloPagina="Nuevo Tratamiento">
        <InputSimple 
        teclado="numeric"
        >
          No. identificación
        </InputSimple>
        <InputSimple
        nombreIcono="bandage"
        posicionIcono="fuera"
        >
          Nombre tratamiento
        </InputSimple>
        <InputFecha
        nombreIcono="calendar" 
        posicionIcono="fuera"
        >
          Fecha
        </InputFecha>
        <View style={[styles.camposTexto, styles.botonPrincipal]}>
          <Text style={styles.contenidoBotonPrincipal}>Registrar</Text>
        </View>
      </SubPagina>

      <SubPagina tituloPagina="Seguimiento de Tratamiento">
        <InputSimple teclado="numeric">
        No. identificación / Codigo tratamiento
        </InputSimple>
        <View style={[styles.camposTexto, styles.botonPrincipal]}>
          <Text style={styles.contenidoBotonPrincipal}>Consultar</Text>
        </View>
        <SeparadorHorizontal/>
        <InputFecha
        nombreIcono="calendar" 
        posicionIcono="fuera"
        >
          Fecha
        </InputFecha>
        <InputDesplegable
        opciones={["Cita", "Control"]}
        palceholder="Cita / Control" 
        nombreIcono="newspaper" 
        posicionIcono="fuera"
        >
          Tipo
        </InputDesplegable>
        <InputDesplegable 
        opciones={listaEstados} 
        // opciones={["Pendiente","Asistio","No asistio","Seguimiento sede externa","Reprogramo","Cancelacion"]} 
        // palceholder="Pendiente / Asistio / Reprogramo" 
        palceholder={listaEstados.slice(0, 3).join(" / ")} 
        nombreIcono="layers" 
        posicionIcono="fuera"
        >
          Estado
        </InputDesplegable>
        <InputSimple>Patologia</InputSimple>
        <InputSimple 
        teclado="numeric" 
        nombreIcono="card" 
        posicionIcono="fuera"
        >
          Precio
        </InputSimple>
        <InputSimple
        nombreIcono="bandage"
        posicionIcono="fuera"
        >
          Tratamiento
        </InputSimple>
        <InputSimple espacioAmplio>Observaciones</InputSimple>
        <Textos>
          Registro Fotografico
        </Textos>
        <View style={styles.camposTexto}>
        <Ionicons
          name={"image-outline"}
          size={dimensions.figura.l}
          color={colors.primario}
        />
        </View>
        <View style={[styles.camposTexto, styles.botonPrincipal]}>
          <Text style={styles.contenidoBotonPrincipal}>Registrar</Text>
        </View>
      </SubPagina>
    </ScrollView>
  );
}