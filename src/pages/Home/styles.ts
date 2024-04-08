import styled from "styled-components/native";
import theme from "../../global/styles/theme";
import { ImageBackground } from "react-native";

export const StyledImageBackground = styled(ImageBackground)`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.black};
`;

export const Footer = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: ${theme.colors.ava1};
  position: absolute;
  bottom: 10px;
`;