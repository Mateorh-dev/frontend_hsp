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

export default function Hora({titulo, descripcion, error, esObligatorio, estaBloqueado, control, name}: Props) {
  const referenciaInputWeb = useRef<HTMLInputElement>(null);
  const abrirSelectorWeb = () => {
    referenciaInputWeb.current?.showPicker()
  }

  const [esVisibleSelector, actualizarVisibilidadSelector] = useState(false);
  const abrirSelectorMovil = () => {
    actualizarVisibilidadSelector(true);
  };
  
  return (
    <Campo titulo={titulo} descripcion={descripcion} error={error} esObligatorio={esObligatorio} estaBloqueado={estaBloqueado} alPresionar={Platform.OS === 'web' ? abrirSelectorWeb : abrirSelectorMovil}>
      <Controller 
      control={control}
      name={name}
      render={({field: {onChange, onBlur, value}}) => {
        const obtenerFechaBase = (val: string) => {
          if (!val) return null;
          if (val.includes(':') && !val.includes('T') && !val.includes('-')) {
            const [h, m] = val.split(':');
            const d = new Date();
            d.setHours(parseInt(h, 10), parseInt(m, 10), 0, 0);
            return d;
          }
          const d = new Date(val);
          return isNaN(d.getTime()) ? null : d;
        };

        const fecha = obtenerFechaBase(value);

        const horaMovil = (          
        <>
          <TextInput  
          editable={false}
          value={fecha ? fecha.toLocaleTimeString("es-CO", { hour: "2-digit", minute: "2-digit", hour12: true }) : ""}
          
          onBlur={onBlur}
          />
        
          {esVisibleSelector && <DateTimePicker 
          value={fecha ? fecha : new Date()}
          onValueChange={(event, selectedDate) => {
            actualizarVisibilidadSelector(false);
            if (selectedDate) {
              const pad = (n: number) => n.toString().padStart(2, '0');
              const hour = pad(selectedDate.getHours());
              const minute = pad(selectedDate.getMinutes());
              onChange(`${hour}:${minute}`);
              // onChange(selectedKCDate.toISOString().split('T')[0]);
            }
          }}
          onDismiss={() => {
            actualizarVisibilidadSelector(false);
          }}
          mode="time"
          />}
        </>
        );

        const horaWeb = (
        <>
          <input
          ref={referenciaInputWeb}
          value={value || ""}
          onBlur={onBlur}
          // onClick={abrirSelectorWeb}
          onChange={(e) => onChange(e.target.value)}
          type="time"
          disabled={estaBloqueado}
          />
        </>
        );

        return Platform.OS === 'web' ? horaWeb : horaMovil;

      }}

      />
    </Campo>
  );
}
