import { styles } from "@/assets/styles";
import { Text, View } from "react-native";

type Props = {
    children: React.ReactNode;
    resaltado?: boolean;
    contenedor?: boolean;
};

export default function Titulos({children: escrito, resaltado=false, contenedor=true}: Props) {
    const componente = (
        <Text style={[
            styles.titulo,
            resaltado && styles.textoResaltado,
            ]}>
        {escrito}
        </Text>
    );
    return (
        contenedor ? (
        <View style={styles.contenedor}>
            {componente}
        </View>
        ) : (
            componente
        )
    );
}