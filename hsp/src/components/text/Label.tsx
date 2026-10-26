import { Text } from "react-native";

type Props = {
  children: React.ReactNode;
};

export default function Label({children: escrito}: Props) {
  return (
    <Text>
      {escrito}
    </Text>
  );
}