import { styles } from "@/assets/styles";
import { useRef, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { Ionicons } from "@expo/vector-icons";
import { dimensions } from "@/assets/dimensions";
import { colors } from "@/assets/colors";

type Props = {
    children: React.ReactNode;
    nombreIcono?: React.ComponentProps<typeof Ionicons>['name'];
    posicionIcono?: "dentro" | "fuera" ;
    bloqueado?: boolean;
    manejarCambio?: (text: string) => void;
};

export default function InputHora({children:titulo, nombreIcono, posicionIcono, bloqueado=false, manejarCambio}: Props) {
    const [enfocado, actualizarEnfocado] = useState(false);
    // const enfocarCampo = useRef<TextInput>(null);
    
    const [hora, actualizarHora] = useState<Date|null>(null);
    const [visibilidadSelectorHora, actualizarVisibilidadSelectorHora] = useState(false);
    const actualizarCampo = (event: DateTimePickerEvent, seleccionarHora?: Date) => {
        actualizarVisibilidadSelectorHora(false);
        if (seleccionarHora) {
            actualizarHora(seleccionarHora);
        }
        actualizarEnfocado(false)
    }

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
        <Pressable 
        disabled={bloqueado}    
        onPress={() => {
                    actualizarVisibilidadSelectorHora(true);
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
                placeholder="HH:MM a.m./p.m."
                editable={false}
                value={hora ? hora.toLocaleTimeString("es-CO", { hour: "2-digit", minute: "2-digit", hour12: true }) : ""}
            ></TextInput>
            { visibilidadSelectorHora &&
            (<DateTimePicker 
                value={hora ? hora : new Date()}
                mode="time"
                onChange={actualizarCampo}
            />)
            }
            </View>
            </View>
        </View>
        </Pressable>
    );
}