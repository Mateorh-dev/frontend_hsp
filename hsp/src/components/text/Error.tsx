import { Text } from "react-native";

type Props = {
  children: React.ReactNode;
};

export default function Error({children: escrito}: Props) {
  return (
    <Text className="text-red-500">
      {escrito}
    </Text>
  );
}