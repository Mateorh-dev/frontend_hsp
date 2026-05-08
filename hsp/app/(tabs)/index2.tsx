import { colors } from "@/assets/colors";
import { dimensions } from "@/assets/dimensions";
import { styles } from "@/assets/styles";
import InputSimple from "@/components/InputSimple";
import Subtitulos from "@/components/Subtitulos";
import Textos from "@/components/Textos";
import api from "@/src/configAxios";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function ConsultarScreen() {
  const[datosUsuario, actualizarDatosUsuario] = useState([]);
  
  const[busqueda, setBusqueda] = useState("");

  const gapiDatosUsuario = async (dato:string) => {
    try {
      const resultado = await api.get(`select/paciente?numeroIdentificacion=${dato}`);
      actualizarDatosUsuario(resultado.data);
    } catch (error) {
      actualizarDatosUsuario([]);
    }
  }

  // useEffect(() => { gapiDatosUsuario(""); }, []);
  
  return (
    
    <View style={{flex:1}}>
      <Subtitulos resaltado>
        Historial y Seguimiento de Pacientes 
      </Subtitulos>
      <InputSimple palceholder="Consultar" teclado="numeric" nombreIcono="search" posicionIcono="fuera" manejarCambio={setBusqueda}>Consultar registro</InputSimple>
      <View style={styles.camposTexto}>
        <Pressable style={styles.botonPrincipal} onPress={() => gapiDatosUsuario(busqueda)}>
          <Text style={styles.contenidoBotonPrincipal}>Consultar</Text>
        </Pressable>
      </View>
      { datosUsuario.length === 0 ? (
        <View style={styles.fondo}>
        <Ionicons
          name={"folder-open-outline"}
          size={dimensions.figura.xl}
          color={colors.primario}
          />
        </View>
      ) : (
        <ScrollView>
          <Textos>
          {JSON.stringify(datosUsuario, null, 2)}
          </Textos>
        </ScrollView>
      )}
    </View>
  );
}