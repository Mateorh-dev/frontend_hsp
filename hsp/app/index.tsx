import { Text, View } from "react-native";
import { styles } from "../assets/styles";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={styles.text}>Este es el sistema HSP.</Text>
    </View>
  );
}
