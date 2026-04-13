import { StyleSheet } from "react-native";
import { colors } from "@/assets/colors";
import { dimensions } from "./dimensions";

export const styles = StyleSheet.create({
    titulo: {
        color: colors.claro.texto,
        fontSize: dimensions.texto.xl,
        fontWeight: "bold",
    },
    subtitulo: {
        color: colors.claro.texto,
        fontSize: dimensions.texto.l,
        fontWeight: "bold",
    },
    texto: {
        color:colors.claro.texto,
        fontSize: dimensions.texto.m,
    },
    textoResaltado: {
        color: colors.primario,
    },
    camposTexto: {
        marginInline: dimensions.figura.xs,
        marginBlock: dimensions.figura.xxs/2,
    },
    tituloInput: {
        fontSize: dimensions.texto.m,
        fontWeight: "bold",
    },
    inputSimple: {
        borderRadius: dimensions.figura.xxs,
        borderColor: colors.claro.borde,
        borderWidth: 2,
        paddingHorizontal: dimensions.figura.xxs,
        minHeight: dimensions.figura.m,
        justifyContent: "center",
    },
    inputResaltado: {
        borderColor: colors.primario,
        backgroundColor: colors.tonosPrimario[100],
    },
    componentesEnFila:{
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    iconoEnFila:{
        marginRight: dimensions.figura.xxs,
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
    botonPrincipal: {
        minHeight: dimensions.figura.m,
        backgroundColor: colors.primario,
        borderRadius: dimensions.figura.xs,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    contenidoBotonPrincipal: {
        color: colors.blanco,
        fontSize: dimensions.texto.m,
        textAlign: "center",
    },
    botonSecundario: {
        minHeight: dimensions.figura.m,
        backgroundColor: colors.tonosPrimario[100],
        borderRadius: dimensions.figura.xs,
        padding: dimensions.figura.xs,
        marginTop: dimensions.figura.xxs,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        alignSelf:"flex-start",
    },
    contenidoBotonSecundario: {
        color: colors.primario,
        fontSize: dimensions.texto.m,
        fontWeight: "bold",
    },
    opcion: {
        textAlign: "center",
        textAlignVertical: "center",
        minHeight: dimensions.figura.m,
        fontSize: dimensions.texto.l,
    },
    separador: {
        backgroundColor: colors.claro.borde,
        height: 2,
        marginInline: dimensions.figura.xs,
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
