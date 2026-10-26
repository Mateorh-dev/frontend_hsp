import { SubInside, SubOutside, Subpage } from "@/components/composition";
import { Boton, Desplegable, Fecha, Hora, Input } from "@/components/form";
import { Cabecera, Descripcion, Error, Etiqueta, Label, Titulo } from "@/components/text";
import { useState } from "react";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import DateTimePicker from '@expo/ui/community/datetime-picker';

const schema =  z.object({
  nombre: z.string().min(5, "muy corto").max(20, "muy largo")
})

export default function FormularioConsultar () {
  // const {register,handleSubmit,formState: { errors } } = useForm({resolver: zodResolver(schema)})
  const {control, handleSubmit, formState: {errors}} = useForm({resolver: zodResolver(schema), mode: "onChange"})
  
  const [verSubpagina, setSubpaginaVisible] = useState(false);

  const [date, setDate] = useState<Date|null>(null);
  const [show, setShow] = useState(false);

  const listaEstadosCita = [
    { label: "Pendiente", value: "001" },
    { label: "No asistió", value: "002" },
    { label: "Asistió", value: "003" },
    { label: "Reprogramó", value: "004" },
    { label: "Cancelación", value: "005" },
    { label: "Seguimiento sede externa", value: "006" }
  ];
  return (
    <>
      <Cabecera>Cabecera</Cabecera>
      <Descripcion>Descripcion</Descripcion>
      <Error>Error</Error>
      <Etiqueta>Etiqueta</Etiqueta>
      <Label>Label</Label>
      <Titulo>Titulo</Titulo>
      <Boton>Boton</Boton>
      <Input
      titulo="Nombre"
      name={"nombre"}
      control={control}
      error={errors.nombre?.message}
      esObligatorio
      />
      <Fecha estaBloqueado titulo="fecha" name="fecha" control={control}/>
      <Hora estaBloqueado titulo="hora" name="hora" control={control}/>
      <Desplegable titulo="estado" tituloSubPage="Selecciona el estado" name="estado" control={control} opciones={listaEstadosCita}/>
      {/* <Boton funcion={() => setShow(true)}>calendario</Boton>
      {show && <DateTimePicker
      value={date ? date : new Date()}
      onValueChange={(event, selectedDate) => {
        setDate(selectedDate);
        setShow(false)
      }}
      onDismiss={() => {
        setShow(false);
      }}
      mode="date"
      />}
      <Label>{date ? date.toLocaleDateString("es-CO") : ""}</Label> */}
      {/* <Input 
      titulo="titulo"
      descripcion="describiendo el campo bonito"
      error="hay aparece el error"
      placeholder="Campo para escribir"
      espacioAmplio
      /> */}

      {/* <Subpage esVisible={verSubpagina}>
        <SubOutside>
          <Boton funcion={() => setSubpaginaVisible(true)}>Abrir Subpagina</Boton>
        </SubOutside>
        <SubInside>
          <Boton funcion={() => setSubpaginaVisible(false)}>Cerrar Subpagina</Boton>
        </SubInside>
      </Subpage> */}
      
    </>
  );
}
