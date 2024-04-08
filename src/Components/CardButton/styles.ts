import styled from "styled-components/native";
import theme from "../../global/styles/theme";

interface ContainerProps {
  color?: string;
}

interface ButtonTextProps {
  colorText?: string;
}

export const Container = styled.View`
  width: 90%;
  height: 50px;
  margin-top: 25px;
`;

export const Button = styled.TouchableOpacity<ContainerProps>`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.backgroundloading};
  border-radius: 20px;
  border: 0.8px;
  border-color: ${theme.colors.ava1};
`;

export const ButtonText = styled.Text<ButtonTextProps>`
  font-size: 15px;
  font-weight: bold;
  color: ${theme.colors.ava1};;
`;