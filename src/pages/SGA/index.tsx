import { WebView } from 'react-native-webview';

export default function SGA() {
  return (
      <WebView
        source={{ uri: 'http://sga.ucq.edu.br/sga/login.xhtml' }}
        style={{ flex: 1, marginTop: 24 }}
      />
  );
}
