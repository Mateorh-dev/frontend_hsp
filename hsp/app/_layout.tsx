import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
  <>
    <StatusBar style="inverted" />
    <Stack>
      <Stack.Screen name="(tabs)" options={{
        title:'Sistema HSP',
        headerLeft: () => <></>, //funcion flecha para ocultar boton de regresar
        headerShown: false,
        }}/>
      {/* <Stack.Screen name="about" options={{headerTitle:'Nosotros'}}/> */}
      <Stack.Screen name="+not-found" />
    </Stack>
  </>
  );
}
