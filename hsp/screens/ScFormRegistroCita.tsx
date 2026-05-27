import { styles } from "@/assets/styles";
import Boton from "@/components/Boton";
import InputDesplegable from "@/components/InputDesplegable";
import InputFecha from "@/components/InputFecha";
import InputHora from "@/components/InputHora";
import InputSimple from "@/components/InputSimple";
import SeparadorHorizontal from "@/components/SeparadorHorizontal";
import Subtitulos from "@/components/Subtitulos";
import Textos from "@/components/Textos";
import api from "@/src/configAxios";
import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";

// +------------------------+---------+------+-----+---------+----------------+
// | Field                  | Type    | Null | Key | Default | Extra          |
// +------------------------+---------+------+-----+---------+----------------+
// | codigoCita             | int(11) | NO   | PRI | NULL    | auto_increment |
// | fecha                  | date    | NO   |     | NULL    |                |
// | hora                   | time    | NO   |     | NULL    |                |
// | fk_codigoEstado        | char(3) | NO   | MUL | NULL    |                |
// +------------------------+---------+------+-----+---------+----------------+

type Props = {
    esModular?: boolean;
};

export default function FormularioCitas({esModular=false}: Props) {
  const[formularioBloqueado, actEstadoFormulario] = useState(true);
  const[botonBloqueado, actEstadoBoton] = useState(true);
  const[inNoIdentificacion, actInNoIdentificacion] = useState("");
  const[inFecha, actInFecha] = useState("");
  const[inHora, actInHora] = useState("");
  const[inEstado, actInEstado] = useState("");
  // const[inTipo, actInTipo] = useState("");

  const gapiExistencia = async (dato:string) => {
    actInNoIdentificacion(dato);
    try {
      const consulta = await api.get(`select/paciente?numeroIdentificacion=${dato}`);
      if (consulta) {actEstadoFormulario(false);}
    } catch (error) {
      actEstadoFormulario(true);
    }
  }

  const poapiCita = async () => {
    try {
      await api.post(`http://20.151.96.248:8000/insert/cita?fecha=${inFecha}&hora=${inHora}&fk_codigoEstado=${inEstado}`);
      actInFecha("");
      actInHora("");
      actInEstado("");
    } catch (error) {
      null
    }
  }

  useEffect (() => {
    if (
      inNoIdentificacion !== "" &&
      inFecha !== "" &&
      inHora !== "" &&
      inEstado !== "") {
      actEstadoBoton(false);
    } else {
      actEstadoBoton(true);
    }
  }, [inNoIdentificacion, inFecha, inHora, inEstado]
  );

  const [listaEstados, actualizarListaEstados] = useState<string[]>([]);
  const gapiEstado = async () => {
    const resultado = await api.get("selectall/estado?pagina=1");
    actualizarListaEstados(resultado.data.map((item: any) => item.nombreEstado));
  }
  useEffect(() => { gapiEstado(); }, []);
  return (
    <ScrollView>
      { esModular ? (
        // <View style={[styles.contenedor, styles.componentesEnFila]}>
          <Subtitulos resaltado>
            Datos Cita
          </Subtitulos>
        //     {/* <Pressable style={styles.botonSecundario} onPress={() => actualizarEstadoFormulario(!estadoFormulario)}>
        //         <Ionicons name={estadoFormulario ? "book" : "pencil"}
        //         color={colors.primario} size={dimensions.texto.l}/>
        //     </Pressable> */}
        // </View>
      ) : (
        <></>
      )}
      <InputSimple 
      manejarCambio={gapiExistencia}
      teclado="numeric"
      >
        No. Identificación
      </InputSimple>
      {/* <View style={[styles.contenedor, styles.botonPrincipal]}>
        <Text style={styles.contenidoBotonPrincipal}>Consultar</Text>
      </View>
      <SeparadorHorizontal/> */}
      <InputFecha
      manejarCambio={actInFecha}
      bloqueado={formularioBloqueado}
      nombreIcono="calendar" 
      posicionIcono="fuera"
      >
        Fecha
      </InputFecha>
      <InputHora
      manejarCambio={actInHora}
      bloqueado={formularioBloqueado}
      nombreIcono="time" 
      posicionIcono="fuera"
      >
        Hora
      </InputHora>
      {/* <InputDesplegable
      manejarCambio={act}
      bloqueado={formularioBloqueado}
      opciones={["Cita", "Control"]}
      palceholder="Cita / Control" 
      nombreIcono="newspaper" 
      posicionIcono="fuera"
      >
        Tipo
      </InputDesplegable> */}
      <InputDesplegable
      manejarCambio={actInEstado}
      bloqueado={formularioBloqueado} 
      opciones={listaEstados} 
      palceholder={listaEstados.slice(0, 3).join(" / ")} 
      nombreIcono="layers" 
      posicionIcono="fuera"
      >
        Estado
      </InputDesplegable>
      {/* <InputSimple>Patologia</InputSimple>
      <InputSimple 
      teclado="numeric" 
      nombreIcono="card" 
      posicionIcono="fuera"
      >
        Precio
      </InputSimple>
      <InputSimple
      nombreIcono="bandage"
      posicionIcono="fuera"
      >
        Tratamiento
      </InputSimple>
      <InputSimple espacioAmplio>Observaciones</InputSimple>
      <Textos>
        Registro Fotografico
      </Textos>
      <View style={styles.contenedor}>
      <Ionicons
        name={"image-outline"}
        size={dimensions.figura.l}
        color={colors.primario}
      />
      </View> */}
      <Boton funcion={poapiCita} bloqueado={botonBloqueado}>Registrar Cita</Boton>
    </ScrollView>
  );
}
