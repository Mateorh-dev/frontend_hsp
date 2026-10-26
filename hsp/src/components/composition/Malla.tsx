import { View } from "react-native";

type Props = {
  children: React.ReactNode;
};

export default function Malla({children: contenido}: Props) {
  return (
    <View>
      {contenido}
    </View>
  );
}