import { Button, Host } from "@expo/ui";
import { Pressable, Text } from "react-native";

type Props = {
  label : string;
  funcion: () => void;
};

export default function BotonUI({label: escrito, funcion}: Props) {
  return (
    <Button label={escrito} onPress={funcion} />
  );
}