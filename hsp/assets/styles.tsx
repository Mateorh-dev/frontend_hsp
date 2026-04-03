import { StyleSheet } from "react-native";
import { colors } from "@/assets/colors";

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
        color:colors.tonosPrimario[100],
        borderRadius:18,
        backgroundColor:colors.primario,
        padding:9,
    },
    error: {
        color:colors.magenta,
        fontWeight:"600",
    },
    marcoImagen: {
        width:"80%",
        maxHeight:"40%",
        
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        
        borderStyle:"dashed",
        borderWidth:5,
        borderRadius:20,

        color:colors.tonosPrimario[400],
        tintColor:colors.tonosPrimario[400],
        borderColor:colors.tonosPrimario[400],
        backgroundColor:colors.tonosPrimario[100],
    },
});
