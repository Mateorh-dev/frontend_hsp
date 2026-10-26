import { Platform, TextInput } from "react-native";
import Campo from "./Campo";
import { useRef, useState } from "react";
import DateTimePicker from '@expo/ui/community/datetime-picker';
import { Controller } from "react-hook-form";

type Props = {
  titulo: string;
  descripcion?: string;
  error?: string;
  esObligatorio?: boolean;
  estaBloqueado?: boolean;

  control: any;
  name: string;
}

export default function Fecha({titulo, descripcion, error, esObligatorio, estaBloqueado, control, name}: Props) {
  const referenciaInputWeb = useRef<HTMLInputElement>(null);
  const abrirSelectorWeb = () => {
    referenciaInputWeb.current?.showPicker()
  }

  const [esVisibleSelector, actualizarVisibilidadSelector] = useState(false);
  const abrirSelectorMovil = () => {
    actualizarVisibilidadSelector(true);
  };

  const formatoFecha = (selectedDate: Date) => {
    const year = selectedDate.getFullYear();
    const month = String(selectedDate.getMonth()+1).padStart(2, '0');
    const day = String(selectedDate.getDate()).padStart(2, '0');
    return`${year}-${month}-${day}`;  
  };

  return (
    <Campo titulo={titulo} descripcion={descripcion} error={error} esObligatorio={esObligatorio} estaBloqueado={estaBloqueado} alPresionar={Platform.OS === 'web' ? abrirSelectorWeb : abrirSelectorMovil}>
      <Controller 
      control={control}
      name={name}
      render={({field: {onChange, onBlur, value}}) => {
        const fecha = value ? (() => {
          const [year, month, day] = value.split("-").map(Number);
          return new Date(year, month - 1, day);})() 
          : null;

        const fechaMovil = (          
        <>
          <TextInput  
          editable={false}
          value={fecha ? fecha.toLocaleDateString("es-CO") : ""}
          onBlur={onBlur}
          />
        
          {esVisibleSelector && <DateTimePicker 
          value={fecha ? fecha : new Date()}
          onValueChange={(event, selectedDate) => {
            actualizarVisibilidadSelector(false);
            if (selectedDate) {
              onChange(formatoFecha(selectedDate))
              // onChange(selectedDate.toISOString().split('T')[0]);
            }
          }}
          onDismiss={() => {
            actualizarVisibilidadSelector(false);
          }}
          mode="date"
          />}
        </>
        );

        const fechaWeb = (
        <>
          <input
          ref={referenciaInputWeb}
          value={value || ""}
          onBlur={onBlur}
          // onClick={abrirSelectorWeb}
          onChange={(e) => onChange(e.target.value)}
          type="date"
          disabled={estaBloqueado}
          />
        </>
        );

        return Platform.OS === 'web' ? fechaWeb : fechaMovil;

      }}

      />
    </Campo>
  );
}
