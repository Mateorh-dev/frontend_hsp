import { Composicion, Malla, SubInside, SubOutside, Subpage } from "@/components/composition";
import { Cabecera, Lectura } from "@/components/text";
import { Boton } from "@/components/form";
import api from "@/api/configAxios";
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { TypePacienteObject } from "./PacienteObject";
import PacienteUpdate from "./PacienteUpdate";

type Props = {
  id: string;
  alEnviar?: () => void;
}

export default function PacienteView ({id, alEnviar}: Props) {
  const [dataPaciente, actualizarDataPAciente] = useState<TypePacienteObject | null>(null);
  const [verEditor, setEditorVisible] = useState(false);

  useEffect(()=>{
    const getdata = async () => {
      try {
        const paciente = await api.get(`api/select/paciente?numeroIdentificacion=${id}`);
        actualizarDataPAciente(paciente.data);
      } catch {
        null
      }
    }
    getdata();
  },[id,verEditor])

  const enviarForm = async () => {
    Alert.alert("Eliminar Paciente",`Desea eliminar al paciente identicado con el documento ${id}`,
      [
        {text:"Cancelar"},
        {text:"Aceptar", 
          onPress: async () => {
            try {
              await api.delete(`/api/delete/paciente?numeroIdentificacion=${id}`);
              if (alEnviar) {
                alEnviar();
              }
            } catch {
              null
            }
          }
        }
      ]
    )
  }
  const nombreCompleto = dataPaciente ? [dataPaciente.primerNombre, dataPaciente.segundoNombre, dataPaciente.primerApellido, dataPaciente.segundoApellido].filter(Boolean).join(" ") : null
  return (
    <Composicion>
      <Cabecera>Informacion de Paciente</Cabecera>
      <Subpage esVisible={verEditor}>
        <SubOutside>
          <Boton funcion={() => setEditorVisible(true)}>Editar</Boton>
        </SubOutside>
        <SubInside>
          <PacienteUpdate id={id} alEnviar={() => setEditorVisible(false)}/>
        </SubInside>
      </Subpage>
      <Malla>
        {nombreCompleto && <Cabecera>{nombreCompleto}</Cabecera>}
        {dataPaciente?.numeroIdentificacion && <Lectura titulo="Documento" contenido={dataPaciente.numeroIdentificacion}/>}
        {dataPaciente?.fechaNacimiento && <Lectura titulo="Fecha de nacimiento" contenido={dataPaciente.fechaNacimiento}/>}
        {dataPaciente?.telefono && <Lectura titulo="Telefono/celular" contenido={dataPaciente.telefono}/>}
        {dataPaciente?.correoElectronico && <Lectura titulo="Correo" contenido={dataPaciente.correoElectronico}/>}
        {dataPaciente?.direccion && <Lectura titulo="Dirección" contenido={dataPaciente.direccion}/>}
        {dataPaciente?.profesion && <Lectura titulo="Profesion" contenido={dataPaciente.profesion}/>}
      </Malla>
      {dataPaciente && <Boton funcion={enviarForm}>Eliminar</Boton>}
    </Composicion>
  );
}
