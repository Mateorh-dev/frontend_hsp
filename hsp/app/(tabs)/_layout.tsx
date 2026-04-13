import { colors } from "@/assets/colors";
import { dimensions } from "@/assets/dimensions";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
 return (
  <Tabs
    initialRouteName="index"
    screenOptions={{
    headerShadowVisible: false,
    headerTintColor: colors.tonosPrimario[800],
    headerStyle: {
      backgroundColor: colors.tonosPrimario[100],
    },

    tabBarActiveTintColor:colors.tonosPrimario[100],
    tabBarActiveBackgroundColor:colors.primario,
    tabBarInactiveTintColor:colors.tonosPrimario[800],
    tabBarInactiveBackgroundColor:colors.tonosPrimario[100],
  }}>
    <Tabs.Screen name="registrarTratamiento" options={{
      headerTitle:"Registrar Tratamiento",
      tabBarLabel:"Tratamientos",
      tabBarIcon:({focused, color}) => <Ionicons
      name={focused ? "document-text" : "document-text-outline"}
      size={dimensions.figura.s}
      color={color}
      />
    }}/>
    <Tabs.Screen name="index" options={{
      headerTitle:"HSP",
      tabBarLabel:"Consultar",
      tabBarIcon:({focused, color}) => <Ionicons
      name={focused ? "search" : "search-outline"}
      size={dimensions.figura.s}
      color={color}
      />
    }}/>
    <Tabs.Screen name="registrarPaciente" options={{
      headerTitle:"Registrar Paciente",
      tabBarLabel:"Pacientes",
      tabBarIcon:({focused, color}) => <Ionicons
      name={focused ? "people" : "people-outline"}
      size={dimensions.figura.s}
      color={color}
      />
    }}/>
  </Tabs>
 );
}
