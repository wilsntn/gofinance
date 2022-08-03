import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Text, Icon } from "./styles";

const icons = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
};

interface Props extends TouchableOpacityProps {
  type: "up" | "down";
  title: string;
}

export function TransactionTypeButton({ title, type, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon name={icons[type]} type={type} />
      <Text>{title}</Text>
    </Container>
  );
}
