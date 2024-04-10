import React, { useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { WebView } from 'react-native-webview';
import * as S from "./styles";
import theme from '../../global/styles/theme';

export default function Library() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>

      <StatusBar backgroundColor={theme.colors.white} style="dark" />
      <S.Container>
        <WebView
          source={{ uri: 'https://unicatolicaquixada.edu.br/' }}
          style={{ flex: 1, marginTop: 24, }}
          onLoad={() => setIsLoading(false)}
        />
        {isLoading && (
          <S.LoadingView>
            <ActivityIndicator size="large" color={theme.colors.ava1} />
          </S.LoadingView>
        )}
      </S.Container>
    </>
  );
}