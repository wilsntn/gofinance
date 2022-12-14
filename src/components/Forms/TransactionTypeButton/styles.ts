import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

interface IconProps {
  type: "up" | "down";
}

export const Container = styled.TouchableOpacity`
  width: 48%;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border: 1.5px solid ${({ theme }) => theme.colors.text};
  border-radius: 5px;

  padding: 16px;
`;

export const Icon = styled(Feather)<IconProps>`
  font-size: ${RFValue(18)}px;
  color: ${({ theme, type }) =>
    type === "up" ? theme.colors.success : theme.colors.attention};
  margin-right: 12px;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
`;
