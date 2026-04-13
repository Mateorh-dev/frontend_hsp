import { styles } from "@/assets/styles";
import { useRef, useState } from "react";
import { FlatList, Modal, Pressable, Text, TextInput, View } from "react-native";
import Titulos from "./Titulos";

type Props = {
    children: React.ReactNode;
    palceholder?: string;
    opciones: (string)[];
};

export default function InputDesplegable({children:titulo, palceholder, opciones}: Props) {
    const [enfocado, actualizarEnfocado] = useState(false);
    // const enfocarCampo = useRef<TextInput>(null);
    
    const [opcionSeleccionada, actualizarOpcionSeleccionada] = useState<string>("");
    const [visibilidadOpciones, actualizarVisibilidadOpciones] = useState(false);
    return(
        <View>
            <Pressable
                onPress={() => {
                        actualizarVisibilidadOpciones(true);
                        actualizarEnfocado(true);
                        }
                }
            >
            <View style={styles.camposTexto}>
                <Text 
                    style={[
                        styles.tituloInput,
                        enfocado && styles.textoResaltado,
                ]}>
                    {titulo}
                </Text>
                <View 
                    style={[
                        styles.inputSimple,
                        enfocado && styles.inputResaltado
                ]}>
                <TextInput
                    // ref={enfocarCampo}
                    placeholder={palceholder}
                    editable={false}
                    value={opcionSeleccionada ? opcionSeleccionada : ""}
                ></TextInput>
                </View>
            </View>
            </Pressable>
            <Modal
                visible={visibilidadOpciones}
                animationType="slide"
            >
                <Titulos>{titulo}</Titulos>
                <View style={[styles.inputSimple, styles.camposTexto]}>
                    <FlatList
                        data={opciones}
                        keyExtractor={(item, index) => index.toString()}
                        ItemSeparatorComponent={
                            () => (<View style={styles.separador}></View>)
                        }
                        renderItem={({ item }) => (
                        <Pressable
                            onPress={() => {
                            actualizarOpcionSeleccionada(item.toString());
                            actualizarVisibilidadOpciones(false);
                            actualizarEnfocado(false);
                            }}
                        >

                        <Text style={styles.opcion}>{item}</Text>
                        </Pressable>
                        )}
                    />
                </View>
            </Modal>
        </View>
    );
}