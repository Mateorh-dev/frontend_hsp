import { styles } from "@/assets/styles";
import { useState } from "react";
import { KeyboardAvoidingView, Text, TextInput, View } from "react-native";

type Props = {
    children: React.ReactNode;
    palceholder?: string;
};

export default function InputSimple({children:titulo, palceholder}: Props) {
    const [enfocado, actualizarEnfocado] = useState(false);
    return(
        <KeyboardAvoidingView>
        <View style={styles.camposTexto}>
            <Text 
                style={[
                    styles.tituloInput, 
                    enfocado && styles.textoResaltado,
            ]}>
                {titulo}
            </Text>
            <TextInput 
                style={[
                    styles.inputSimple,
                    enfocado && styles.inputResaltado,
                ]}
                placeholder={palceholder}
                onFocus={() => actualizarEnfocado(true)}
                onBlur={() => actualizarEnfocado(false)}
            ></TextInput>
        </View>
        </KeyboardAvoidingView>
    );
}