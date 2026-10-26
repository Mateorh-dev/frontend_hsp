import { colors } from "@/assets/colors";
import { dimensions } from "@/assets/dimensions";
import { styles } from "@/assets/styles";
import { Ionicons } from "@expo/vector-icons";
import { useRef, useState } from "react";
import { KeyboardAvoidingView, Pressable, Text, TextInput, View } from "react-native";

type Props = {
    children: React.ReactNode;
    palceholder?: string;
    teclado?: "default" | "numeric" | "email-address" | "url" ;
    limiteCaracteres?: number;
    espacioAmplio?: boolean;
    nombreIcono?: React.ComponentProps<typeof Ionicons>['name'];
    posicionIcono?: "dentro" | "fuera" ;
    bloqueado?: boolean;
    valor?: string;
    manejarCambio?: (text: string) => void;
};

export default function InputSimple({children:titulo, palceholder, teclado, limiteCaracteres, espacioAmplio, nombreIcono, posicionIcono, bloqueado=false, valor, manejarCambio}: Props) {
    const [enfocado, actualizarEnfocado] = useState(false);
    const enfocarCampo = useRef<TextInput>(null);
    
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
        <KeyboardAvoidingView>
        <Pressable
            disabled={bloqueado}
            onPress={() => {
                    if (enfocarCampo.current) {
                        enfocarCampo.current.focus();
                    }}
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
                ]}
            >
            {posicionIcono === "dentro" && icono}
            <TextInput
                ref={enfocarCampo}
                placeholder={palceholder}
                keyboardType={teclado}
                onChangeText={manejarCambio}
                onFocus={() => actualizarEnfocado(true)}
                onBlur={() => actualizarEnfocado(false)}
                maxLength={limiteCaracteres}
                multiline={espacioAmplio ? true : false}
                numberOfLines={espacioAmplio ? 5 : 1}
                editable={!bloqueado}
                value={valor}
            ></TextInput>
            </View>
            </View>
        </View>
        </Pressable>
        </KeyboardAvoidingView>
    );
}