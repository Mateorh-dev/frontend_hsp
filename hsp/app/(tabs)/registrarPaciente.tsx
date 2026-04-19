import InputSimple from "@/components/InputSimple";
import InputFecha from "@/components/InputFecha";
import { ScrollView, Text, View } from "react-native";
import SeparadorHorizontal from "@/components/SeparadorHorizontal";
import { styles } from "@/assets/styles";
import Titulos from "@/components/Titulos";

export default function PacientesScreen() {
  return (
    <ScrollView>
      <InputSimple
      teclado="numeric"
      limiteCaracteres={15}
      >
        No. Identificación
      </InputSimple>
      <View style={[styles.camposTexto, styles.botonPrincipal]}>
        <Text style={styles.contenidoBotonPrincipal}>Consultar</Text>
      </View>

      <SeparadorHorizontal/>

      <Titulos>Nombre del Paciente</Titulos>
      <InputSimple>Primer nombre</InputSimple>
      <InputSimple>Segundo nombre</InputSimple>
      <InputSimple>Primer apellido</InputSimple>
      <InputSimple>Segundo apellido</InputSimple>
      
      <Titulos>Datos de contacto</Titulos>
      <InputSimple 
      teclado="numeric"
      limiteCaracteres={15}
      nombreIcono="call"
      posicionIcono="fuera"
      palceholder="300 000 0000"
      >
        Telefono
      </InputSimple>
      <InputSimple 
      teclado="email-address" 
      nombreIcono="mail" 
      posicionIcono="fuera"
      palceholder="micorreo@correos.com"
      >
        Correo
      </InputSimple>
      
      <Titulos>Datos Personales</Titulos>
      <InputSimple 
      nombreIcono="map" 
      posicionIcono="fuera"
      palceholder="Bogota, Bogota DC"
      >
        Lugar de expedición Doc. Identidad
      </InputSimple>
      <InputFecha 
      nombreIcono="calendar" 
      posicionIcono="fuera"
      >
        Fecha nacimiento
      </InputFecha>
      <InputSimple 
      teclado="numeric" 
      limiteCaracteres={5} 
      palceholder="(kg)"
      >
        Peso
      </InputSimple>
      <InputSimple>Direccion de residencia</InputSimple>
      <InputSimple>Profesion</InputSimple>
      <InputSimple espacioAmplio>Alergias</InputSimple>
      <InputSimple espacioAmplio>Antecedentes</InputSimple>
      <View style={[styles.camposTexto, styles.botonPrincipal]}>
        <Text style={styles.contenidoBotonPrincipal}>Registrar</Text>
      </View>
    </ScrollView>
  );
}