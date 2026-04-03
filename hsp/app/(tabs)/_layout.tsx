import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (<Tabs>
    <Tabs.Screen name="index" options={{
      headerTitle:'HSP',
      tabBarLabel:'HOME',
      }}/>
    <Tabs.Screen name="about" options={{
      headerTitle:'Nosotros',
      tabBarLabel:'US',
      }}/>
  </Tabs>);
}
