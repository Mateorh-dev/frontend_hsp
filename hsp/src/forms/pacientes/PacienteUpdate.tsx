import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { es } from "zod/locales";
import { Composicion, Malla } from "@/components/composition";
import { Cabecera } from "@/components/text";
import { Boton, Fecha, Input } from "@/components/form";
import api from "@/api/configAxios";
import { useEffect } from "react";

z.config(es());
const pacienteSchema = z.object({
  primerNombre: z.string().max(25),
  segundoNombre: z.string().max(25).nullish(),
  primerApellido: z.string().max(25),
  segundoApellido: z.string().max(25).nullish(),
  fechaNacimiento: z.coerce.date(),
  telefono: z.string().max(15),
  correoElectronico: z.email().max(128).nullish(),
  direccion: z.string().nullish(),
  profesion: z.string().nullish(),
})

type Props = {
  id: string;
  alEnviar?: () => void;
}

export default function PacienteUpdate ({id, alEnviar}: Props) {
  const {control, handleSubmit, reset, formState: {errors}} = useForm({
    resolver: zodResolver(pacienteSchema),
    mode: "onChange",
  })

  useEffect(()=>{
    const getdata = async () => {
      try {
        const paciente = await api.get(`api/select/paciente?numeroIdentificacion=${id}`);
        reset(paciente.data)
      } catch {
        null
      }
    }
    getdata();
  },[id])

  const enviarForm = async (data:any) => {
    try {
      await api.patch(`/api/update/paciente?numeroIdentificacion=${id}`, data);
      if (alEnviar) {
        alEnviar();
      }
      reset();
    } catch {
      null
    }
  }

  return (
    <Composicion>
      <Cabecera>Actualizar datos de Paciente</Cabecera>
      <Malla>
        <Input titulo="Primer Nombre" esObligatorio name="primerNombre" error={errors.primerNombre?.message} control={control}/>
        <Input titulo="Segundo Nombre" name="segundoNombre" error={errors.segundoNombre?.message} control={control}/>
        <Input titulo="Primer Apellido" esObligatorio name="primerApellido" error={errors.primerApellido?.message} control={control}/>
        <Input titulo="Segundo Apellido" name="segundoApellido" error={errors.segundoApellido?.message} control={control}/>
        <Fecha titulo="Fecha de nacimiento" esObligatorio name="fechaNacimiento" error={errors.fechaNacimiento?.message} control={control}/>
        <Input titulo="Telefono/celular" esObligatorio teclado="numeric" name="telefono" error={errors.telefono?.message} control={control}/>
        <Input titulo="Correo" teclado="email-address" name="correoElectronico" error={errors.correoElectronico?.message} control={control}/>
        <Input titulo="Dirección" name="direccion" error={errors.direccion?.message} control={control}/>
        <Input titulo="Profesion" name="profesion" error={errors.profesion?.message} control={control}/>
      </Malla>
      <Boton funcion={handleSubmit(enviarForm)}>Actualizar</Boton>
    </Composicion>
  );
}
