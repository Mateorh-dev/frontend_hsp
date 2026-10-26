import { styles } from "@/assets/styles";
import { Text, View } from "react-native";

type Props = {
    children: React.ReactNode;
    color?: "azul" | "amarillo" | "verde" | "magenta" | "gris";
    contenedor?: boolean;
};

export default function Etiquetas({children: escrito, color="azul", contenedor=true}: Props) {
    const componente = (
        <Text style={[styles.etiqueta, styles[color]]}>
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