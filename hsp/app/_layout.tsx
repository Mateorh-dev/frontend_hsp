import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
  <>
    <StatusBar style="auto" />
    <Stack>
      <Stack.Screen name="(tabs)" options={{
        title:"Sistema HSP",
        headerShown: false,
        }}/>
      <Stack.Screen name="+not-found" />
    </Stack>
  </>
  );
}
