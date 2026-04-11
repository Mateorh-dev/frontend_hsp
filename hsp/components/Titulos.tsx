import { styles } from "@/assets/styles";
import { Text, View } from "react-native";

type Props = {
    children: React.ReactNode;
    resaltado?: boolean;
};

export default function Titulos({children: escrito, resaltado=false}: Props) {
    return (
        <View style={styles.camposTexto}>
            <Text style={[
                styles.titulo,
                resaltado && styles.textoResaltado,
                ]}>
            {escrito}
            </Text>
        </View>
    );
}