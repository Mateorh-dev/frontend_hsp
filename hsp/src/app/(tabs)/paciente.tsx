import FormularioPaciente from "@/forms/FormPaciente";
import { PacienteCreate, PacienteId, PacienteView } from "@/forms/pacientes";
import { useState } from "react";

export default function ScreenPaciente() {

  const [pacienteExiste,actualizarExistencia] = useState<boolean |null>(null);
  const [pacienteId,actualizarId] = useState<string>("");

  return <FormularioPaciente/>;
}

{/* <PacienteCreate id=""/> */}
{/* <PacienteId actualizarExistencia={actualizarExistencia} actualizarId={actualizarId}/>
{(pacienteExiste === false) && <PacienteCreate id={pacienteId}/>}
{pacienteExiste && <PacienteView id={pacienteId}/>} */}