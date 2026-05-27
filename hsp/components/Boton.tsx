import { colors } from "@/assets/colors";
import { styles } from "@/assets/styles";
import { Pressable, Text } from "react-native";

type Props = {
    children: React.ReactNode;
    bloqueado?: boolean;
    funcion?: () => void;
};

export default function Boton({children: escrito, bloqueado=false, funcion}: Props) {
    return (
        <Pressable 
        style={[
            styles.contenedor, 
            styles.botonPrincipal,
            bloqueado && {backgroundColor:colors.gris.medio},
        ]}
        disabled={bloqueado}
        onPress={funcion}
        >
            <Text
            style={styles.contenidoBotonPrincipal}
            >
            {escrito}
            </Text>
        </Pressable>
    );
}