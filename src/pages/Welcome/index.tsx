import { WebView } from 'react-native-webview';

export default function Welcome() {
  return (
      <WebView
        source={{ uri: 'https://ava.unicatolicaquixada.edu.br/portal3/login/index.php' }}
        style={{ flex: 1, marginTop: 24 }}
      />
  );
}
