import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TextInput`
  width: 100%;
  font-size: ${RFValue(14)};
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text_dark};
  padding: 18px 20px;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
  margin-bottom: 8px;
`;
