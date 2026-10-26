import { View } from "react-native";

type Props = {
  children: React.ReactNode;
};

export default function Card({children: contenido}: Props) {
  return (
    <View>
      {contenido}
    </View>
  );
}