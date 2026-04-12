import { colors } from "@/assets/colors";
import { dimensions } from "@/assets/dimensions";
import { styles } from "@/assets/styles";
import InputSimple from "@/components/InputSimple";
import Subtitulos from "@/components/Subtitulos";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, View } from "react-native";

export default function ConsultarScreen() {
  return (
    <View style={{flex:1}}>
      <Subtitulos resaltado>
        Historial y Seguimiento de Pacientes 
      </Subtitulos>
      <InputSimple palceholder="Consultar">Consultar registro</InputSimple>
      <View style={styles.fondo}>
        <Ionicons
          name={"folder-open-outline"}
          size={dimensions.figura.xl}
          color={colors.primario}
        />
      </View>
    </View>
  );
}