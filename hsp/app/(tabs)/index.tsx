import { Text, View } from "react-native";
import {Link} from "expo-router";
import { styles } from "../../assets/styles";

export default function IndexScreen() {
  return (
    <View
      style={styles.fondo}
    >
      <Text style={styles.texto}>Este es el sistema HSP.</Text>
      <Link href={"/about"} style={styles.boton}>
        About
      </Link>
    </View>
  );
}
