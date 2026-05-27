import { styles } from "@/assets/styles";
import { useRef, useState } from "react";
import { FlatList, Modal, Pressable, Text, TextInput, View } from "react-native";
import Titulos from "./Titulos";
import { Ionicons } from "@expo/vector-icons";
import { dimensions } from "@/assets/dimensions";
import { colors } from "@/assets/colors";
import SeparadorHorizontal from "./SeparadorHorizontal";

type Props = {
    children: React.ReactNode;
    palceholder?: string;
    opciones: (string)[];
    nombreIcono?: React.ComponentProps<typeof Ionicons>['name'];
    posicionIcono?: "dentro" | "fuera" ;
    bloqueado?: boolean;
    manejarCambio?: (text: string) => void;
};

export default function InputDesplegable({children:titulo, palceholder, opciones, nombreIcono, posicionIcono, bloqueado=false, manejarCambio}: Props) {
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
                disabled={bloqueado}
                onPress={() => {
                        actualizarVisibilidadOpciones(true);
                        actualizarEnfocado(true);
                        }
                }
            >
            <View style={styles.contenedor}>
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
                        bloqueado && styles.inputBloqueado,
                        posicionIcono === "dentro" && styles.componentesEnFila,
                        posicionIcono === "fuera" && {flex:1},
                ]}>
                {posicionIcono === "dentro" && icono}
                <TextInput
                    // ref={enfocarCampo}
                    onChangeText={manejarCambio}
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
                <View style={[styles.marco, styles.contenedor]}>
                    <FlatList
                        data={opciones}
                        keyExtractor={(item, index) => index.toString()}
                        ItemSeparatorComponent={
                            () => (<SeparadorHorizontal/>)
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