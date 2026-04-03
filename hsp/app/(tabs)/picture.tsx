import { Text, View } from "react-native";
import { styles } from "@/assets/styles";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/assets/colors";
// import { Image } from "expo-image";

export default function PictureScreen() {
  return (
    <View
      style={styles.fondo}
    >
      <View style={styles.marcoImagen}>
        <Ionicons name="image-outline" size={100} color={colors.primario}/>
        <Text style={[styles.texto, {color:colors.primario}]}>Imagen</Text>
      </View>
    </View>
  );
}
