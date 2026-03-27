import { Tabs } from "expo-router";

export default function RootLayout() {
  return (<Tabs>
    <Tabs.Screen name="index" options={{
      title:'HSP',
      headerLeft: () => <></>,
      }}/>
    <Tabs.Screen name="about" options={{headerTitle:'Nosotros'}}/>
    <Tabs.Screen name="+not-found" />
  </Tabs>);
}
