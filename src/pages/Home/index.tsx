import * as S from "./styles";
import CardButton from '../../Components/CardButton';
import theme from '../../global/styles/theme';
import { useNavigation } from '@react-navigation/native';

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

  return (
    <S.Container>
      <CardButton text="Ambiente Virtual de Aprendizagem (AVA)" colorText={theme.colors.ava2} action={handleNavigationAva}></CardButton>
      <CardButton text="Portal Institucional (RM)" colorText={theme.colors.ava2} action={handleNavigationRM}></CardButton>
      <CardButton text="Sistema de Gestão de Acadêmica (SGA)" colorText={theme.colors.ava2} action={handleNavigationSGA}></CardButton>
    </S.Container>
  );
}
