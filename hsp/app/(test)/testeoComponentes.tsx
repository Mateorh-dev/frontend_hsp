import InputSimple from "@/components/InputSimple";
import SubPagina from "@/components/SubPagina";
import Subtitulos from "@/components/Subtitulos";
import Textos from "@/components/Textos";
import Titulos from "@/components/Titulos";
import { ScrollView } from "react-native";

export default function TesteoScreen() {
  return (
    <ScrollView>
        <Titulos>
          Nos MINTIERON sobre el alcohol: esto es lo que no te dicen
        </Titulos>
        <Subtitulos>
          La Pulla
        </Subtitulos>
        <Textos>
          Por mucho tiempo nos creímos el cuento de que un trago al año no hace daño. Pero la ciencia dice todo lo contrario. Aquí les contamos por qué en Colombia tenemos una relación tóxica con el alcohol.
        </Textos>
        <Textos>
          La escritura e investigación del guion estuvieron a cargo de Juan Carlos Rincón, Valeria Cortés y Ana María Pedraza. En la presentación está Rincón. Kenny Salamanca editó este video.
        </Textos>
        <SubPagina tituloPagina="Formulario">
          <InputSimple palceholder="0123456789">Numeros</InputSimple>
          <InputSimple palceholder="ABCDEFG">Letras</InputSimple>
        </SubPagina>
        <InputSimple palceholder="Mateo A.">Nombre</InputSimple>
        <InputSimple palceholder="Rodriguez">Apellido</InputSimple>
        <InputSimple palceholder="Rodriguez">Apellido</InputSimple>
        <InputSimple palceholder="Rodriguez">Apellido</InputSimple>
    </ScrollView>
  );
}
