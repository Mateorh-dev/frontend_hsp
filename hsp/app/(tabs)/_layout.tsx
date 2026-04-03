import { Tabs } from "expo-router";
import { colors } from "@/assets/colors"
import { Ionicons } from "@expo/vector-icons"

export default function TabsLayout() {
  return (
  <Tabs screenOptions={{
    tabBarActiveTintColor:colors.tonosPrimario[100],
    tabBarActiveBackgroundColor:colors.primario,
  }}>
    <Tabs.Screen name="index" options={{
      headerTitle:'HSP',
      tabBarLabel:'HOME',
      tabBarIcon:({focused, color}) => <Ionicons 
      name={focused ? "heart-sharp" : "heart-outline"}
      size={20}
      color={color}
      />,
      }}/>
    <Tabs.Screen name="about" options={{
      headerTitle:'Nosotros',
      tabBarLabel:'US',
      tabBarIcon:({focused, color}) => <Ionicons 
      name={focused ? "people-sharp" : "people-outline"}
      size={20}
      color={color}
      />,
      }}/>
  </Tabs>
  );
}
