import { WebView } from 'react-native-webview';
import * as S from "./styles";
import CardButton from '../../Components/CardButton';
import theme from '../../global/styles/theme';
import { useNavigation } from '@react-navigation/native';

export default function Home() {

  const navigation = useNavigation();

  function handleNavigation() {
    navigation.navigate("Home");
  }
  
  return (
<S.Container>
    <CardButton text="AVA" colorText={theme.colors.ava2} ></CardButton>

</S.Container>
  );
}
