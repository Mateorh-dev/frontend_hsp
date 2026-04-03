import { Text, View } from "react-native";
import { Link, Stack } from "expo-router";
import { styles } from "@/assets/styles";

export default function NotFoundScreen() {
  return (
    <>
    <Stack.Screen options={{title: "Pagina no encontrada"}} />
    <View style={styles.fondo}    >
      <Text style={styles.error}>Tal parece que esta pagina no existe</Text>
      <br />
      <Link href={"/(tabs)"} style={styles.boton}>
        Regresar al inicio
      </Link>
    </View>
    </>
  );
}

