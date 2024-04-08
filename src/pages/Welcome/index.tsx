import React from 'react';

import * as S from "./styles";
import { useNavigation } from '@react-navigation/native';

export default function () {

  const navigation = useNavigation();

  function handleNavigation() {
    navigation.navigate("Home");
  }

  return (
    <S.Container>
      <S.WelcomeText>
        Olá, eu sou Daniel Holanda. Fiz um projeto para juntar todos os sistemas da Unicatólica em um único lugar. Espero que seja útil e ajude vocês.
      </S.WelcomeText>
      <S.Button onPress={handleNavigation}>
        <S.ButtonText>Continuar</S.ButtonText>
      </S.Button>
    </S.Container>
  );
};