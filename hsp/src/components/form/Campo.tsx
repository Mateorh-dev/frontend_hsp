import { Pressable, View } from "react-native";
import { Descripcion, Error, Label } from "../text";

type Props = {
  children: React.ReactNode;
  titulo?: string;
  descripcion?: string;
  error?: string;
  esObligatorio?: boolean;
  estaBloqueado?: boolean;
  alPresionar?: () => void;
};

export default function Campo({children: componente, titulo, descripcion, error, esObligatorio, estaBloqueado, alPresionar}: Props) {
  return (
    <Pressable onPress={alPresionar} disabled={estaBloqueado}>
      <View>
        <Label>
          {titulo}
          {esObligatorio ? " *" : null}
        </Label>
        {descripcion && <Descripcion>{descripcion}</Descripcion>}
        {componente}
        {error && <Error>{error}</Error>}
      </View>
    </Pressable>
  );
}
