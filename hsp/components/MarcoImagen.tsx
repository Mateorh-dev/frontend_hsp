import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { colors } from "@/assets/colors";
import { styles } from "@/assets/styles";

type Props = {
  nameIcon: React.ComponentProps<typeof Ionicons>['name'];
  escrito: string;
  conBorde?: boolean;
};

export default function MarcoImagen({nameIcon, escrito, conBorde=true}: Props) {
  return ( 
  <View style={[styles.marcoImagen, {borderWidth: conBorde ? 5 : 0 }]}>
    <Ionicons name={nameIcon} size={100} color={colors.primario}/>
    <Text style={[styles.texto, {color:colors.primario}]}>{escrito}</Text>
  </View>
  );
}