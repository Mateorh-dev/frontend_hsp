import { useState, useEffect } from "react";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { es } from "zod/locales";
import { Composicion, Malla } from "@/components/composition";
import { Cabecera, Etiqueta } from "@/components/text"; // Asegúrate de importar Etiqueta
import { Boton, Fecha, Input } from "@/components/form";
import api from "@/api/configAxios";
 
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

export default function FormularioPaciente () {
  const { control, handleSubmit, reset, watch, formState: { errors } } = useForm({
    resolver: zodResolver(pacienteSchema), 
    mode: "onChange"
  });

  // Estados para controlar el bloqueo y los mensajes
  const [bloqueado, setBloqueado] = useState(true);
  const [mensajeError, setMensajeError] = useState<string | null>(null);

  // Observamos el valor del número de identificación
  const numeroIdentificacion = watch("numeroIdentificacion");

  useEffect(() => {
    // Si el campo está vacío o muy corto, bloqueamos y limpiamos mensajes
    if (!numeroIdentificacion || numeroIdentificacion.trim().length === 0) {
      setBloqueado(true);
      setMensajeError(null);
      return;
    }

    // Función para consultar a la API con un pequeño retraso (debounce) opcional
    const verificarPaciente = async () => {
      try {
        const response = await api.get(`/api/select/paciente?numeroIdentificacion=${numeroIdentificacion}`);
        
        // Si la petición es exitosa (200), el paciente ya existe
        if (response.status === 200) {
          setBloqueado(true);
          setMensajeError("El usuario ya se encuentra registrado.");
        }
      } catch (error: any) {
        // Si la respuesta es un 400 (o error equivalente indicando que no existe)
        if (error.response && error.response.status === 400) {
          setBloqueado(false); // Habilitamos el resto de campos
          setMensajeError(null);
        }
      }
    };

    const timeoutId = setTimeout(() => {
      verificarPaciente();
    }, 500); // Espera 500ms después de dejar de escribir para hacer la petición

    return () => clearTimeout(timeoutId);
  }, [numeroIdentificacion]);
  
  const enviarForm = async (data: any) => {
    try {
      console.log(data);
      await api.post("/api/insert/paciente", data);
      reset();
      setBloqueado(true);
      setMensajeError(null);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Composicion>
      <Cabecera>Registro de Paciente</Cabecera>
      <Malla>
        {/* El documento NUNCA se bloquea */}
        <Input 
          titulo="Documento" 
          esObligatorio 
          descripcion="Número de Identidad (CC / TI / CE)" 
          name="numeroIdentificacion" 
          error={errors.numeroIdentificacion?.message} 
          control={control}
        />

        {/* Mensaje condicional si ya existe el usuario */}
        {mensajeError && <Etiqueta>{mensajeError}</Etiqueta>}

        {/* Demás campos controlados por la variable 'bloqueado' */}
        <Input titulo="Primer Nombre" esObligatorio name="primerNombre" error={errors.primerNombre?.message} control={control} disabled={bloqueado} />
        <Input titulo="Segundo Nombre" name="segundoNombre" error={errors.segundoNombre?.message} control={control} disabled={bloqueado} />
        <Input titulo="Primer Apellido" esObligatorio name="primerApellido" error={errors.primerApellido?.message} control={control} disabled={bloqueado} />
        <Input titulo="Segundo Apellido" name="segundoApellido" error={errors.segundoApellido?.message} control={control} disabled={bloqueado} />
        <Fecha titulo="Fecha de nacimiento" esObligatorio name="fechaNacimiento" error={errors.fechaNacimiento?.message} control={control} disabled={bloqueado} />
        <Input titulo="Telefono/celular" esObligatorio teclado="numeric" name="telefono" error={errors.telefono?.message} control={control} disabled={bloqueado} />
        <Input titulo="Correo" teclado="email-address" name="correoElectronico" error={errors.correoElectronico?.message} control={control} disabled={bloqueado} />
        <Input titulo="Dirección" name="direccion" error={errors.direccion?.message} control={control} disabled={bloqueado} />
        <Input titulo="Profesion" name="profesion" error={errors.profesion?.message} control={control} disabled={bloqueado} />
      </Malla>

      {/* Opcionalmente puedes deshabilitar el botón de registro si los campos siguen bloqueados */}
      <Boton funcion={handleSubmit(enviarForm)} disabled={bloqueado}>Registrar</Boton>
    </Composicion>
  );
}