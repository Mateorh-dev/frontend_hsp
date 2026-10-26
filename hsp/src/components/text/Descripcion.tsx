import { Text } from "react-native";

type Props = {
  children: React.ReactNode;
};

export default function Descripcion({children: escrito}: Props) {
  return (
    <Text>
      {escrito}
    </Text>
  );
}