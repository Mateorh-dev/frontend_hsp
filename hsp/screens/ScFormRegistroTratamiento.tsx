import Boton from "@/components/Boton";
import InputSimple from "@/components/InputSimple";
import api from "@/src/configAxios";
import { useEffect, useState } from "react";
import { ScrollView } from "react-native";

// +-------------------------+-------------+------+-----+---------+----------------+
// | Field                   | Type        | Null | Key | Default | Extra          |
// +-------------------------+-------------+------+-----+---------+----------------+
// | codigoTratamiento       | int(11)     | NO   | PRI | NULL    | auto_increment |
// | nombreTratamiento       | text        | NO   |     | NULL    |                |
// | fk_numeroIdentificacion | varchar(15) | NO   | MUL | NULL    |                |
// +-------------------------+-------------+------+-----+---------+----------------+

export default function FormularioTratamiento () {
  const[formularioBloqueado, actEstadoFormulario] = useState(true);
  const[botonBloqueado, actEstadoBoton] = useState(true);
  const[inNoIdentificacion, actInNoIdentificacion] = useState("");
  const[inNombreTratamiento, actInNombreTratamiento] = useState("");
  const[inDescripcionTratamiento, actInDescripcionTratamiento] = useState(" ");

  const gapiExistencia = async (dato:string) => {
    actInNoIdentificacion(dato);
    try {
      const consulta = await api.get(`select/paciente?numeroIdentificacion=${dato}`);
      if (consulta) {actEstadoFormulario(false);}
    } catch (error) {
      actEstadoFormulario(true);
    }
  }

  const poapiTratamiento = async () => {
    try {
      await api.post(`insert/tratamiento?nombreTratamiento=${inNombreTratamiento}&descripcionTratamiento=${inDescripcionTratamiento}&fk_numeroIdentificacion=${inNoIdentificacion}`);
      actInNombreTratamiento("");
    } catch (error) {
      null
    }
  }

  useEffect(() => {
    if (inNoIdentificacion !== "" && 
      inNombreTratamiento.length >= 3) {
      actEstadoBoton(false);
    } else {
      actEstadoBoton(true);
    }
  }, [inNoIdentificacion, inNombreTratamiento]);

  return (
    <ScrollView>
      <InputSimple
      manejarCambio={gapiExistencia}
      teclado="numeric"
      >
        No. identificación
      </InputSimple>
      <InputSimple
      manejarCambio={actInNombreTratamiento}
      valor={inNombreTratamiento}
      bloqueado={formularioBloqueado}
      >
        Nombre tratamiento
      </InputSimple>
      {/* <View style={[styles.contenedor, styles.botonPrincipal]}>
          <Text style={styles.contenidoBotonPrincipal}>Registrar Tratamiento</Text>
      </View> */}

      {/* <Pressable style={[styles.contenedor, styles.botonPrincipal]} onPress={() => poapiTratamiento()}>
          <Text style={styles.contenidoBotonPrincipal}></Text>
      </Pressable> */}
      <Boton funcion={poapiTratamiento} bloqueado={botonBloqueado}>Registrar Tratamiento</Boton>
    </ScrollView>
  );
}


// iniciar con todo bloqueado menos el primer input
// consultar de forma retroactiva el identificador
// si el numero existe, el formulario de desbloqueara
// una vez enviado el formulario, se limpia todo

// useEffect(() => { 
//   const temporizador = setTimeout(() => { }
//   consultarAPI(valorEntrada);
//   }, 1000);

//   return () => clearTimeout(temporizador);
// }, [valorEntrada]);