import React from "react";
import { Modal, View } from "react-native";

type Props = {
  children: React.ReactNode;
  esVisible: boolean;
}

type ChildProps = {
  children: React.ReactNode;
}

export function SubInside({ children }: ChildProps) {
  return <>{children}</>
}
export function SubOutside({ children }: ChildProps) {
  return <>{children}</>
}

export function Subpage({children: contenido, esVisible}: Props){
  const inside: React.ReactNode[] = [];
  const outside: React.ReactNode[] = [];

  React.Children.forEach(contenido, (child) => {
    if (!React.isValidElement<ChildProps>(child)) return;

    if (child.type === SubInside) {
      inside.push(child.props.children);
    }

    if (child.type === SubOutside) {
      outside.push(child.props.children);
    }
  });

  return (
    <>
    <View>
      {outside}
    </View>
    <Modal 
    visible={esVisible}
    animationType="slide"
    >
      {inside}
    </Modal>
    </>
  );
}

// export const Sub = Object.assign(Subpage, {
//   Inside,
//   Outside,
// });