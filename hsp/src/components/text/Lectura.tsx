import { View } from "react-native";
import Titulo from "./Titulo";
import Label from "./Label";

type Props = {
  titulo: string;
  contenido: string;
};

export default function Lectura({titulo, contenido}: Props) {
  return (

      <View>
        <Titulo>
          {titulo}
        </Titulo>
        <Label>
          {contenido}
        </Label>
      </View>
  );
}
