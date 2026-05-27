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
    contenedor: {
        marginInline: dimensions.figura.xs,
        marginBlock: dimensions.figura.xxs/2,
    },
    marco: {
        borderRadius: dimensions.figura.xxs,
        borderColor: colors.claro.borde,
        borderWidth: 2,
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
    inputBloqueado: {
        borderColor: colors.gris.medio,
        backgroundColor: colors.claro.borde,
    },
    componentesEnFila: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    componentesEnFilaJustificado: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    iconoEnFila: {
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
    etiqueta: {
        fontSize: dimensions.texto.s,
        backgroundColor: colors.tonosPrimario[100],
        borderRadius: dimensions.figura.m,
        fontWeight: "bold",
        fontFamily: "monospace",
        alignSelf: "flex-start",
        padding: dimensions.figura.xxs,
    },
    azul: {
        color: colors.azul.oscuro,
        backgroundColor: colors.azul.claro,
        borderColor: colors.azul.oscuro,
    },
    amarillo: {
        color: colors.amarillo.oscuro,
        backgroundColor: colors.amarillo.claro,
        borderColor: colors.amarillo.oscuro,
    },
    verde: {
        color: colors.verde.oscuro,
        backgroundColor: colors.verde.claro,
        borderColor: colors.verde.oscuro,
    },
    magenta: {
        color: colors.magenta.oscuro,
        backgroundColor: colors.magenta.claro,
        borderColor: colors.magenta.oscuro,
    },
    gris: {
        color: colors.gris.oscuro,
        backgroundColor: colors.gris.claro,
        borderColor: colors.gris.oscuro,
    },
    separador: {
        backgroundColor: colors.claro.borde,
        height: 2,
        marginInline: dimensions.figura.xs,
    },
    error: {
        color:colors.magenta.medio,
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
