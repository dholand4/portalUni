import React, { useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import * as S from "./styles";
import theme from '../../global/styles/theme';

export default function Library() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <S.Container>
      <WebView
        source={{ uri: 'https://dliportal.zbra.com.br/Login.aspx?key=fcrs' }}
        style={{ flex: 1, marginTop: 27, }}
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
