import styled from "styled-components/native";
import theme from "../../global/styles/theme";

interface ContainerProps {
  color?: string;
}

interface ButtonTextProps {
  colorText?: string;
}

export const Container = styled.View`
  width: 50%;
  height: 120px;
  margin-top: 10px;
  margin-left: 10px;
`;

export const Button = styled.TouchableOpacity<ContainerProps>`
  flex: 1;
padding: 5px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.ava2};
  border-radius: 20px;
  border: .8px;
  border-color: ${theme.colors.black};
`;

export const ButtonText = styled.Text<ButtonTextProps>`
  font-size: 16px;
  text-align: center;
  font-weight: 400;
  color: ${theme.colors.white};
`;