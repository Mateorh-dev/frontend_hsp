import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const styles = StyleSheet.create({
    texto: {color:colors.claro.texto,
            borderWidth:5,
            borderColor:colors.claro.borde,
            borderRadius:18,
            padding:5,
    },
    fondo: {backgroundColor:colors.claro.fondo,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
    },
});
