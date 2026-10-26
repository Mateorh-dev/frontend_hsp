import api from "@/api/configAxios";
import { Composicion } from "@/components/composition";
import { Input } from "@/components/form";
import { Cabecera } from "@/components/text";
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from "react";
import { useForm } from "react-hook-form"
import z from "zod"
import { es } from "zod/locales"

z.config(es());
const pacienteSchema = z.object({
  numeroIdentificacion: z.string().max(15),
})

type Props = {
  actualizarExistencia: (data: boolean | null) => void;
  actualizarId: (data: string) => void;
}

export default function PacienteId({actualizarExistencia,actualizarId}: Props) {
  const {control, watch, formState: {errors}} = useForm({
      resolver: zodResolver(pacienteSchema),
      mode: "onChange",
  })

  const numeroIdentificacion = watch("numeroIdentificacion") ?? "";

  useEffect(()=>{
    actualizarId(numeroIdentificacion);
    if (!numeroIdentificacion || numeroIdentificacion.trim() === "") {
      actualizarExistencia(null)
      return;
    }
    const espera = setTimeout(async () => {
      try {
        await api.get(`api/check/paciente?numeroIdentificacion=${numeroIdentificacion}`);
        actualizarExistencia(true);
      } catch (error : any) {
        if (error.response && error.response?.status === 400) {
          actualizarExistencia(false);
        }
      }
    }, 500);
    return () => {clearTimeout(espera)};
  }, [numeroIdentificacion]);

  return (
    <Composicion>
      <Cabecera>Pacientes</Cabecera>
      <Input titulo="Documento" name="numeroIdentificacion" error={errors.numeroIdentificacion?.message} control={control}/>
    </Composicion>
  );
}
