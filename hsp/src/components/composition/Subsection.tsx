import React from "react";
import { ScrollView, View } from "react-native";
import { BottomSheet, Host }  from "@expo/ui"

type Props = {
  children: React.ReactNode;
  esVisible: boolean;
  alDisminuir: () => void;
}

type ChildProps = {
  children: React.ReactNode;
}

export function SecInside({ children }: ChildProps) {
  return <>{children}</>
}
export function SecOutside({ children }: ChildProps) {
  return <>{children}</>
}

export function Subsection({children: contenido, esVisible, alDisminuir}: Props){
  const inside: React.ReactNode[] = [];
  const outside: React.ReactNode[] = [];

  React.Children.forEach(contenido, (child) => {
    if (!React.isValidElement<ChildProps>(child)) return;

    if (child.type === SecInside) {
      inside.push(child.props.children);
    }

    if (child.type === SecOutside) {
      outside.push(child.props.children);
    }
  });

  return (
    <>
    <Host>
      {outside}
    </Host>
    <BottomSheet
    isPresented={esVisible}
    onDismiss={alDisminuir}
    >
        {inside}
    </BottomSheet>
    </>
  );
}

// export const Sub = Object.assign(Subpage, {
//   Inside,
//   Outside,
// });