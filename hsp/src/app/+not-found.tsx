import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";


export default function NotFoundScreen() {
  return (
    <>
      {/* <Stack.Title>Página no encontrada</Stack.Title> */}
      <View>
        <Text>
          Úpale... No deberías esta aquí
        </Text>
        <Text>
          🍬🍭 Toma un dulce y regresa al sistema
        </Text>
        <Link
        href={"/"}
        >
          Regresar al sistema
        </Link>
      </View>
    </>
  );
}
