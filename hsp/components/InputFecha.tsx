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
};

export default function InputSimple({children:titulo, nombreIcono, posicionIcono}: Props) {
    const [enfocado, actualizarEnfocado] = useState(false);
    // const enfocarCampo = useRef<TextInput>(null);
    
    const [fecha, actualizarFecha] = useState<Date|null>(null);
    const [visibilidadSelectorFecha, actualizarVisibilidadSelectoFecha] = useState(false);
    const actualizarCampo = (event: DateTimePickerEvent, seleccionarFecha?: Date) => {
        actualizarVisibilidadSelectoFecha(false);
        if (seleccionarFecha) {
            actualizarFecha(seleccionarFecha);
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
            onPress={() => {
                    actualizarVisibilidadSelectoFecha(true);
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
                placeholder="DD/MM/AAAA"
                editable={false}
                value={fecha ? fecha.toLocaleDateString("es-CO") : ""}
            ></TextInput>
            { visibilidadSelectorFecha &&
            (<DateTimePicker 
                value={fecha ? fecha : new Date()}
                mode="date"
                onChange={actualizarCampo}
            />)
            }
            </View>
            </View>
        </View>
        </Pressable>
    );
}