import { colors } from "@/assets/colors";
import { dimensions } from "@/assets/dimensions";
import { styles } from "@/assets/styles";
import CardDatosPaciente from "@/components/CardDatosPaciente";
import InputSimple from "@/components/InputSimple";
import SubPagina from "@/components/SubPagina";
import Subtitulos from "@/components/Subtitulos";
import Textos from "@/components/Textos";
import FormularioPacientes from "@/screens/ScFormRegistroPaciente";
import api from "@/src/configAxios";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function ConsultarScreen() {
  const[datosUsuario, actualizarDatosUsuario] = useState([]);
  const[valorEntrada, actualizarValorEntrada] = useState("");

  const gapiDatosUsuario = async (dato:string) => {
    actualizarValorEntrada(dato);
    try {
      const resultado = await api.get(`select/paciente?numeroIdentificacion=${dato}`);
      actualizarDatosUsuario(resultado.data);
    } catch (error) {
      actualizarDatosUsuario([]);
    }
  }
  
  return (
    
    <View style={{flex:1}}>
      <Subtitulos resaltado>
        Historial y Seguimiento de Pacientes 
      </Subtitulos>
      <InputSimple palceholder="Consultar" teclado="numeric" nombreIcono="search" posicionIcono="fuera" manejarCambio={gapiDatosUsuario}>Consultar registro</InputSimple>
      {/* <View style={styles.contenedor}>
        <Pressable style={styles.botonPrincipal} onPress={() => gapiDatosUsuario(busqueda)}>
          <Text style={styles.contenidoBotonPrincipal}>Consultar</Text>
        </Pressable>
      </View> */}
      { datosUsuario.length === 0 ? (
        <View style={styles.fondo}>
          { valorEntrada.length === 0 ? null : (
            <View>
              <Subtitulos>Registro no encontrado</Subtitulos>
              <SubPagina tituloPagina="" textoBotonAbrir="Registrar Paciente" textoBotonCerar="">
                <FormularioPacientes esModular/>
              </SubPagina>
            </View>
          ) }
        <Ionicons
          name={"folder-open-outline"}
          size={dimensions.figura.xl}
          color={colors.primario}
          />
        </View>
      ) : (
        <ScrollView>
          <CardDatosPaciente dato={datosUsuario}/>
          {/* <Textos>
          {JSON.stringify(datosUsuario, null, 2)}
          </Textos> */}
        </ScrollView>
      )}
    </View>
  );
}