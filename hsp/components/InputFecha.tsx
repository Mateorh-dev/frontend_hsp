import { styles } from "@/assets/styles";
import { useRef, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";

type Props = {
    children: React.ReactNode;
};

export default function InputSimple({children:titulo}: Props) {
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
                    styles.inputSimple,
                    enfocado && styles.inputResaltado,
            ]}>
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
        </Pressable>
    );
}