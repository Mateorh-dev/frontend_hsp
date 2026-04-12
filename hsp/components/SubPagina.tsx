import { styles } from "@/assets/styles";
import { useState } from "react";
import { Modal, Pressable, ScrollView, Text, View } from "react-native";
import Titulos from "./Titulos";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/assets/colors";
import { dimensions } from "@/assets/dimensions";

type Props = {
    children: React.ReactNode;
    tituloPagina: string;
    textoBotonAbrir?: string;
    textoBotonCerar?: string;
};

export default function SubPagina({children: contenido, tituloPagina, textoBotonAbrir, textoBotonCerar="Regresar"}: Props) {
    const [visivilidadModal, actualizarVisivilidadModal] = useState(false);
    if (textoBotonAbrir === undefined) {
        textoBotonAbrir = tituloPagina;
    }
    return (
        <View>
            <View style={styles.camposTexto}>
            <Pressable style={styles.botonPrincipal} onPress={() => actualizarVisivilidadModal(true)}>
                <Text style={styles.contenidoBotonPrincipal}>{textoBotonAbrir}</Text>
            </Pressable>
            </View>
            <Modal
                visible={visivilidadModal}
                animationType="slide"
            >
                <ScrollView>
                <View style={styles.camposTexto}>
                <Pressable style={styles.botonSecundario} onPress={() => actualizarVisivilidadModal(false)}>
                    <Ionicons name="arrow-back-outline" color={colors.primario} size={dimensions.texto.l}/>
                    <Text style={styles.contenidoBotonSecundario}>{textoBotonCerar}</Text>
                </Pressable>
                </View>
                <Titulos resaltado>{tituloPagina}</Titulos>
                {contenido}
                </ScrollView>
            </Modal>
        </View>
    );
}