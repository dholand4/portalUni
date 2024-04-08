import { WebView } from 'react-native-webview';

export default function RM() {
  return (
    <WebView
      source={{ uri: 'https://online3.ucq.edu.br/corpore.net/Login.aspx' }}
      style={{ flex: 1, marginTop: 24 }}
    />
  );
}
