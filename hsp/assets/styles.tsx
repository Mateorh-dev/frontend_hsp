import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const styles = StyleSheet.create({
    texto: {
        color:colors.claro.texto,
    },
    fondo: {
        backgroundColor:colors.claro.fondo,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    boton: {
        // borderWidth:5,
        // borderColor:colors.claro.borde,
        color:colors.blanco,
        borderRadius:18,
        backgroundColor:colors.primario,
        padding:9,
    },
    error: {
        color:colors.magenta,
        fontWeight:"600",
    }
});
