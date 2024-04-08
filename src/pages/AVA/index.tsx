import React, { useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import * as S from "./styles";
import theme from '../../global/styles/theme';

export default function AVA() {
  const [isLoading, setIsLoading] = useState(true);

  const handleShouldStartLoadRequest = (event) => {
    const { url } = event.nativeEvent;

    // Verifica se o link é externo ao domínio do AVA
    if (!url.startsWith('https://ava.unicatolicaquixada.edu.br/')) {
      // Aborta a solicitação para evitar abrir no navegador externo
      return false;
    }

    return true;
  };

  return (
    <S.Container>
      <WebView
        source={{ uri: 'https://ava.unicatolicaquixada.edu.br/portal3/login/index.php' }}
        style={{ flex: 1, marginTop: 24 }}
        onLoad={() => setIsLoading(false)}
        onShouldStartLoadRequest={handleShouldStartLoadRequest}
        onNavigationStateChange={(navState) => {
          // Detecta mudanças de URL e atualiza isLoading conforme necessário
          setIsLoading(navState.loading);
        }}
        renderLoading={() => (
          <View style={S.LoadingView}>
            <ActivityIndicator size="large" color={theme.colors.ava1} />
          </View>
        )}
        startInLoadingState
      />
    </S.Container>
  );
}
