import * as S from "./styles";
import CardButton from '../../Components/CardButton';
import theme from '../../global/styles/theme';
import { useNavigation } from '@react-navigation/native';

import backgroundImage from '../../assets/banner.png';

export default function Home() {

  const navigation = useNavigation();

  function handleNavigationAva() {
    navigation.navigate("AVA");
  }

  function handleNavigationRM() {
    navigation.navigate("RM");
  }

  function handleNavigationSGA() {
    navigation.navigate("SGA");
  }

  function handleNavigationLibrary() {
    navigation.navigate("Library");
  }

  return (
    <S.StyledImageBackground source={backgroundImage}>
      <S.Container>
        <CardButton text="Ambiente Virtual de Aprendizagem (AVA)" colorText={theme.colors.ava2} action={handleNavigationAva}></CardButton>
        <CardButton text="Portal Institucional (RM)" colorText={theme.colors.ava2} action={handleNavigationRM}></CardButton>
        <CardButton text="Sistema de Gestão Acadêmica (SGA)" colorText={theme.colors.ava2} action={handleNavigationSGA}></CardButton>
        <CardButton text="Minha Biblioteca Virtual" colorText={theme.colors.ava2} action={handleNavigationLibrary}></CardButton>
        <S.Footer>Feito por Daniel Holanda</S.Footer>
      </S.Container>
    </S.StyledImageBackground>
  );
}
