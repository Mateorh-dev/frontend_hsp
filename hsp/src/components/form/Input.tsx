import { useRef } from "react";
import Campo from "./Campo";
import { TextInput } from "react-native";
import { Controller } from "react-hook-form"; 

type Props = {
  titulo: string;
  descripcion?: string;
  error?: string;
  esObligatorio?: boolean;
  placeholder?: string;
  teclado?: "default" | "numeric" | "email-address" | "url" ;
  espacioAmplio?: boolean;
}
type PropsRHF = {
  titulo: string;
  descripcion?: string;
  error?: string;
  esObligatorio?: boolean;
  estaBloqueado?: boolean;
  placeholder?: string;
  teclado?: "default" | "numeric" | "email-address" | "url" ;
  espacioAmplio?: boolean;

  control: any;
  name: string;
}

function InputBase({titulo, descripcion, error,esObligatorio, placeholder, teclado, espacioAmplio}: Props) {
  const referenciaInput = useRef<TextInput>(null);
  const enfocarInput = () => {
    referenciaInput.current?.focus();
  };
  
  return (
    <Campo titulo={titulo} descripcion={descripcion} error={error} esObligatorio={esObligatorio} alPresionar={enfocarInput}>
      <TextInput 
      ref={referenciaInput}
      placeholder={placeholder}
      keyboardType={teclado}
      multiline={espacioAmplio}
      numberOfLines={espacioAmplio ? 5 : 1}
      />
    </Campo>
  );
}

export default function Input({titulo, descripcion, error, esObligatorio, estaBloqueado, placeholder, teclado, espacioAmplio, control, name}: PropsRHF) {
  const referenciaInput =  useRef<TextInput>(null);
  const enfocarInput = () => {
    referenciaInput.current?.focus();
  };
  
  return (
    <Campo titulo={titulo} descripcion={descripcion} error={error} esObligatorio={esObligatorio} estaBloqueado={estaBloqueado} alPresionar={enfocarInput}>
      <Controller 
      control={control}
      name={name}
      render={({field: {onChange, onBlur, value}}) => (
        <TextInput 
        ref={referenciaInput}
        placeholder={placeholder}
        keyboardType={teclado}
        multiline={espacioAmplio}
        numberOfLines={espacioAmplio ? 5 : 1}
        editable={!estaBloqueado}
  
        value={value ?? ""}
        onChangeText={onChange}
        onBlur={onBlur}
        />
      )}
      />
    </Campo>
  );
}
