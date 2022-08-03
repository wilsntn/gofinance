import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Text, Icon } from "./styles";

const icons = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
};

interface Props extends TouchableOpacityProps {
  type: "up" | "down";
}

export function TransactionTypeButton({ title, type, ...rest }) {
  return (
    <Container {...rest}>
      <Icon name={icons[type]} />
      <Text>{title}</Text>
    </Container>
  );
}
