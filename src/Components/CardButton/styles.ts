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
  background: ${({ theme, color }) => color || theme.colors.ava1};
  border-radius: 25px;
  border: 2px;
  border-color: ${theme.colors.ava2};
`;

export const ButtonText = styled.Text<ButtonTextProps>`
  font-size: 15px;
  font-weight: bold;
  color: ${({ theme, colorText }) => colorText || theme.colors.ava1};
`;