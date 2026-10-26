import { Tabs } from "expo-router"

export default function TabsLayout() {
  return (
  <Tabs initialRouteName="consultar">
    <Tabs.Screen 
    name="consultar"
    options={{
      tabBarLabel:"Consultar",
    }}
    />
    <Tabs.Screen 
    name="paciente"
    options={{
      tabBarLabel:"Paciente",
    }}
    />
    <Tabs.Screen 
    name="cita"
    options={{
      tabBarLabel:"Cita",
    }}
    />
  </Tabs>
  );
}
