import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import '@css';

export default function RootLayout() {
  return (
    <>
      <StatusBar />
      <Stack 
      screenOptions={{ headerShown:false }}
      >
        <Stack.Screen 
        name="(tabs)" 
        />
      </Stack>
    </>
  );
}
