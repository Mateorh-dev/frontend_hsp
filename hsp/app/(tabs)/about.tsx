import { Text, View } from "react-native";
import { styles } from "../../assets/styles";

export default function AboutScreen() {
  return (
    <View
      style={styles.fondo}
    >
      <Text style={styles.texto}>Este es el sistema HSP - Sobre nosotros.</Text>
    </View>
  );
}
