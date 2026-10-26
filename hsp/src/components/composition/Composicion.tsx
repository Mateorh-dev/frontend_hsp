import { KeyboardAvoidingView, ScrollView, View } from "react-native";

type Props = {
  children: React.ReactNode;
};

export default function Composicion({children: contenido}: Props) {
  return (
    <KeyboardAvoidingView>
    <ScrollView>
      {contenido}
    </ScrollView>
    </KeyboardAvoidingView>
  );
}