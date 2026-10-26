import { Alert, Pressable, Text, View } from "react-native";
// import { colors } from "@/assets/colors";
import { styles } from "@/assets/styles";

type Props = {
  escrito: string;
};

export default function BotonAlert({escrito}: Props) {
  return (
    <View>
      <Pressable onPress={() => Alert.alert("Titulo","Boton presionado")}>
        {/* alert("Boton presionado") */}
        
        <Text style={styles.boton}>{escrito}</Text>
      </Pressable>
    </View>
  );
}