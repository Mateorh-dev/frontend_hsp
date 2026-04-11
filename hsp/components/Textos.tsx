import { styles } from "@/assets/styles";
import { Text, View } from "react-native";

type Props = {
    children: React.ReactNode;
    resaltado?: boolean;
};

export default function Textos({children:escrito, resaltado=false}: Props) {
    return (
        <View style={styles.camposTexto}>
            <Text style={[
                styles.texto,
                resaltado && styles.textoResaltado,
                ]}>
            {escrito}
            </Text>
        </View>
    );
}

