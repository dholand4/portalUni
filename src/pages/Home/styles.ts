import styled from "styled-components/native";
import theme from "../../global/styles/theme";
import { ImageBackground } from "react-native";

export const Container = styled.View`
  flex: 1;
  /* background-color: ${theme.colors.ava1}; */
  padding: 20px;
  align-items: center;
  justify-content: center;
`;

export const StyledImageBackground = styled(ImageBackground)`
  flex: 1;
  width: 100%;
  height: 100%;
`;