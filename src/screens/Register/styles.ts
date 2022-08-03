import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
`;

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.shape};
  font-size: ${RFValue(18)}px;
`;

export const Header = styled.View`
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  height: ${RFValue(113)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  padding-bottom: 19px;
`;

export const Form = styled.View`
  padding: 24px;
  width: 100%;
  justify-content: space-between;
  flex: 1;
`;

export const Fields = styled.View``;
