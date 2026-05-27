import { colors } from "@/assets/colors";
import { dimensions } from "@/assets/dimensions";
import { styles } from "@/assets/styles";
import InputFecha from "@/components/InputFecha";
import InputSimple from "@/components/InputSimple";
import SeparadorHorizontal from "@/components/SeparadorHorizontal";
import Subtitulos from "@/components/Subtitulos";
import Titulos from "@/components/Titulos";
import api from "@/src/configAxios";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

// +----------------------+--------------+------+-----+---------+-------+
// | Field                | Type         | Null | Key | Default | Extra |
// +----------------------+--------------+------+-----+---------+-------+
// | numeroIdentificacion | varchar(15)  | NO   | PRI | NULL    |       |
// | primerNombre         | varchar(25)  | NO   |     | NULL    |       |
// | segundoNombre        | varchar(25)  | YES  |     | NULL    |       |
// | primerApellido       | varchar(25)  | NO   |     | NULL    |       |
// | segundoApellido      | varchar(25)  | YES  |     | NULL    |       |
// | fechaNacimiento      | date         | YES  |     | NULL    |       |
// | peso                 | varchar(10)  | YES  |     | NULL    |       |
// | telefono             | varchar(15)  | NO   |     | NULL    |       |
// | correoElectronico    | varchar(128) | YES  |     | NULL    |       |
// | direccion            | text         | YES  |     | NULL    |       |
// | profesion            | text         | YES  |     | NULL    |       |
// | antecedentes         | text         | YES  |     | NULL    |       |
// | alergias             | text         | YES  |     | NULL    |       |
// | fk_codigoMunicipio   | char(5)      | NO   | MUL | NULL    |       |
// +----------------------+--------------+------+-----+---------+-------+

type Props = {
    esModular?: boolean;
};

export default function FormularioPacientes({esModular=false}: Props) {
  const[estaBloqueadoFormulario, actualizarEstadoFormulario] = useState(false);
  const[formularioBloqueado, actEstadoFormulario] = useState(true);
  const[botonBloqueado, actEstadoBoton] = useState(true);
  const[inNoIdentificacion, actInNoIdentificacion] = useState("");

  const gapiExistencia = async (dato:string) => {
    actInNoIdentificacion(dato);
    try {
      const consulta = await api.get(`select/paciente?numeroIdentificacion=${dato}`);
      if (consulta) {actEstadoFormulario(false);}
    } catch (error) {
      actEstadoFormulario(true);
    }
  }

  return (
    <ScrollView >
      { esModular ? (
        <View style={[styles.contenedor, styles.componentesEnFila]}>
          <View style={{flex:1}}><Subtitulos resaltado contenedor={false}>
            Datos Paciente
          </Subtitulos></View>
            <Pressable style={styles.botonSecundario} onPress={() => actualizarEstadoFormulario(!estaBloqueadoFormulario)}>
                <Ionicons name={estaBloqueadoFormulario ? "pencil" : "book"}
                color={colors.primario} size={dimensions.texto.l}/>
            </Pressable>
        </View>
      ) : (
        <></>
      )}
      <View>
        <InputSimple
        teclado="numeric"
        limiteCaracteres={15}
        bloqueado={estaBloqueadoFormulario}
        >
            No. Identificación
        </InputSimple>
        <View style={[styles.contenedor, styles.botonPrincipal]}>
            <Text style={styles.contenidoBotonPrincipal}>Consultar</Text>
        </View>
      </View>

      <View style={styles.contenedor}></View>
      <SeparadorHorizontal/>
      <View style={styles.contenedor}></View>

      <Titulos>Nombre del Paciente</Titulos>
      <InputSimple 
      limiteCaracteres={25} 
      bloqueado={estaBloqueadoFormulario}>
      Primer nombre
      </InputSimple>
      <InputSimple 
      limiteCaracteres={25} 
      bloqueado={estaBloqueadoFormulario}>
      Primer apellido
      </InputSimple>


      {/* <Titulos>Nombre del Paciente</Titulos>
      <InputSimple>Primer nombre</InputSimple>
      <InputSimple>Segundo nombre</InputSimple>
      <InputSimple>Primer apellido</InputSimple>
      <InputSimple>Segundo apellido</InputSimple> */}
      
      <Titulos>Datos de contacto</Titulos>
      <InputSimple 
      teclado="numeric"
      limiteCaracteres={15}
      nombreIcono="call"
      posicionIcono="fuera"
      palceholder="300 000 0000"
      bloqueado={estaBloqueadoFormulario}
      >
        Telefono
      </InputSimple>
      {/* <InputSimple 
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
      <InputFecha2
      nombreIcono="time" 
      posicionIcono="fuera"
      >
      HORA
      </InputFecha2>
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
      <InputSimple espacioAmplio>Antecedentes</InputSimple> */}
      <View style={[styles.contenedor, styles.botonPrincipal]}>
        <Text style={styles.contenidoBotonPrincipal}>Registrar Paciente</Text>
      </View>
    </ScrollView>
  );
}