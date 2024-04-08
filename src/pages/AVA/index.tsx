import React, { useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import * as S from "./styles";
import theme from '../../global/styles/theme';

export default function AVA() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <S.Container>
      <WebView
        source={{ uri: 'https://ava.unicatolicaquixada.edu.br/portal3/login/index.php' }}
        style={{ flex: 1 }}
        onLoad={() => setIsLoading(false)}
      />
      {isLoading && (
        <S.LoadingView>
          <ActivityIndicator size="large" color={theme.colors.ava1} />
        </S.LoadingView>
      )}
    </S.Container>
  );
}
