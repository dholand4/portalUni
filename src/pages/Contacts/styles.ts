import styled from 'styled-components/native';
import theme from '../../global/styles/theme';
import { FlatList } from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  align-items: center;
  background-color: ${theme.colors.ava1};
`;

export const List = styled(FlatList)`
margin-top: 30px;
width: 100%;

`;
export const Footer = styled.Text`
  font-size: 12px;
  color: ${theme.colors.white};
  position: absolute;
  bottom: 10px;
`;