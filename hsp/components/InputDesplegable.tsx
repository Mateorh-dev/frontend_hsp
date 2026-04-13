import { styles } from "@/assets/styles";
import { useRef, useState } from "react";
import { FlatList, Modal, Pressable, Text, TextInput, View } from "react-native";
import Titulos from "./Titulos";
import { Ionicons } from "@expo/vector-icons";
import { dimensions } from "@/assets/dimensions";
import { colors } from "@/assets/colors";

type Props = {
    children: React.ReactNode;
    palceholder?: string;
    opciones: (string)[];
    nombreIcono?: React.ComponentProps<typeof Ionicons>['name'];
    posicionIcono?: "dentro" | "fuera" ;
};

export default function InputDesplegable({children:titulo, palceholder, opciones, nombreIcono, posicionIcono}: Props) {
    const [enfocado, actualizarEnfocado] = useState(false);
    // const enfocarCampo = useRef<TextInput>(null);
    
    const [opcionSeleccionada, actualizarOpcionSeleccionada] = useState<string>("");
    const [visibilidadOpciones, actualizarVisibilidadOpciones] = useState(false);
    
    const icono = nombreIcono ? (
        <View style={styles.iconoEnFila}>
        <Ionicons 
            name={nombreIcono}
            size={dimensions.figura.xs}
            color={enfocado ? colors.primario : colors.negro}
        />
        </View>
    ): null;
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
                        posicionIcono === "fuera" && styles.componentesEnFila,
                    ]}
                >
                {posicionIcono === "fuera" && icono}
                <View 
                    style={[
                        styles.inputSimple,
                        enfocado && styles.inputResaltado,
                        posicionIcono === "dentro" && styles.componentesEnFila,
                        posicionIcono === "fuera" && {flex:1},
                ]}>
                {posicionIcono === "dentro" && icono}
                <TextInput
                    // ref={enfocarCampo}
                    placeholder={palceholder}
                    editable={false}
                    value={opcionSeleccionada ? opcionSeleccionada : ""}
                ></TextInput>
                </View>
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