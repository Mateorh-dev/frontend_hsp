import { Pressable, Text } from "react-native";

type Props = {
  children: React.ReactNode;
  bloqueado?: boolean;
  funcion?: () => void;
};

export default function Boton({children: escrito, bloqueado, funcion}: Props) {
  return (
    <Pressable 
    disabled={bloqueado}
    onPress={funcion}
    >
      <Text>
      [{escrito}]
      </Text>
    </Pressable>
  );
}