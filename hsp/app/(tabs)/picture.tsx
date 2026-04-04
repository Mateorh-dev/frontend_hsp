import { View } from "react-native";
import { styles } from "@/assets/styles";
import MarcoImagen from "@/components/MarcoImagen";
import BotonAlert from "@/components/BotonAlert";
// import { Image } from "expo-image";

export default function PictureScreen() {
  return (
    <View
      style={styles.fondo}
    >
      <MarcoImagen nameIcon="image-outline" escrito="Imagen tomada" conBorde />
      <BotonAlert escrito="¡Presiona!"/>
      {/* <View style={styles.marcoImagen}>
        <Ionicons name="image-outline" size={100} color={colors.primario}/>
        <Text style={[styles.texto, {color:colors.primario}]}>Imagen</Text>
      </View> */}
    </View>
  );
}
