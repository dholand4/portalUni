import styled from "styled-components/native";
import theme from "../../global/styles/theme";
import { ImageBackground } from "react-native";

export const Image = styled.Image`
  width: 130px;
  height: 130px;
  margin-bottom: -5px;
`;

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  align-items: center;
  background-color: ${theme.colors.ava1};
`;

export const ContainerButton = styled.View`
flex-direction: row;
align-items: center;
margin-left: -10px;
`;

export const ContainerButtonLinks = styled.View`
align-items: center;
/* margin-left: -10px; */
width: 105%;
`;

export const Footer = styled.Text`
  font-size: 12px;
  /* font-weight: bold; */
  color: ${theme.colors.white};
  position: absolute;
  bottom: 10px;
`;