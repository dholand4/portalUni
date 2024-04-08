import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.ava1};
`;

export const WelcomeText = styled.Text`
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  color: ${theme.colors.ava2};
`;

export const Button = styled.TouchableOpacity`
  background-color: ${theme.colors.white};
  padding: 10px 20px;
  border-radius: 5px;
`;