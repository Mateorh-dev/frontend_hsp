import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="(tabs)" options={{
      title:'HSP',
      headerLeft: () => <></>,
      headerShown: false,
      }}/>
    {/* <Stack.Screen name="about" options={{headerTitle:'Nosotros'}}/> */}
    <Stack.Screen name="+not-found" />
  </Stack>;
}
