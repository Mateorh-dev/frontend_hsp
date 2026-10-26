import Campo from "./Campo";
import { FlatList, Pressable, TextInput, View } from "react-native";
import { Controller } from "react-hook-form";
import { SubInside, SubOutside, Subpage } from "../composition";
import { useState } from "react";
import { Label, Titulo } from "../text";

type Opcion = {
  label: string;
  value: string | number;
}

type Props = {
  titulo: string;
  tituloSubPage?: string;
  descripcion?: string;
  error?: string;
  esObligatorio?: boolean;
  placeholder?: string;
  opciones: Opcion[];

  control: any;
  name: string;
}

export default function Desplegable({titulo, tituloSubPage, descripcion, error, esObligatorio, placeholder, control, name, opciones}: Props) {
  const [verSubpagina, setSubpaginaVisible] = useState(false);

  return (
    <Campo titulo={titulo} descripcion={descripcion} error={error} esObligatorio={esObligatorio} alPresionar={() => setSubpaginaVisible(true)}>
      <Controller
      control={control}
      name={name}
      render={({field: {onChange, onBlur, value}}) => {
        const opcionSeleccionada = opciones.find(opcion => opcion.value === value);
        return (
        <Subpage esVisible={verSubpagina}>
          <SubOutside>
            <TextInput
            editable={false}
            placeholder={placeholder}
      
            value={opcionSeleccionada ? opcionSeleccionada.label : ""}
            onBlur={onBlur}
            />
          </SubOutside>
          <SubInside>
            <View>
              <Titulo>{tituloSubPage ? tituloSubPage : titulo}</Titulo>
              <FlatList 
              data={opciones}
              keyExtractor={(item) => String(item.value)}
              renderItem={({item}) => (
              <Pressable
              onPress={() => {
                onChange(item.value)
                setSubpaginaVisible(false);
              }}
              >
                <Label>{item.label}</Label>
              </Pressable>
              )
              }
              />
            </View>
          </SubInside>
        </Subpage>
        )
      }}
      />
    </Campo>
  );
}