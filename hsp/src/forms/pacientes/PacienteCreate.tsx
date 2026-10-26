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
  numeroIdentificacion: z.string().max(15),
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

export default function PacienteCreate ({id, alEnviar}: Props) {
  const {control, handleSubmit, reset, setValue, formState: {errors}} = useForm({
    resolver: zodResolver(pacienteSchema),
    mode: "onChange",
    defaultValues: {numeroIdentificacion: id}
  })

  useEffect(()=>{
    setValue("numeroIdentificacion",id)
  }, [id,setValue])

  const enviarForm = async (data:any) => {
    try {
      // console.log(data);
      await api.post("/api/insert/paciente", data);
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
      <Cabecera>Registro de Paciente</Cabecera>
      <Malla>
        <Input titulo="Documento" esObligatorio descripcion="Número de Identidad (CC / TI / CE)" name="numeroIdentificacion" error={errors.numeroIdentificacion?.message} control={control}/>
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
      <Boton funcion={handleSubmit(enviarForm)}>Registrar</Boton>
    </Composicion>
  );
}
