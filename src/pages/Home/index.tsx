import theme from '../../global/styles/theme';

import CardButton from '../../Components/ButtonPages';
import Button from "../../Components/Button";

import { useNavigation } from '@react-navigation/native';

import logo from "../../assets/logo.png"
import * as S from "./styles";

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

  function handleNavigationSite() {
    navigation.navigate("Site");
  }

  function handleNavigationContacts() {
    navigation.navigate("Contacts");
  }

  return (
    <S.Container>

      <S.Image source={logo} />

      <S.ContainerButton>
        <CardButton text="Ambiente Virtual de Aprendizagem (AVA)"
          colorText={theme.colors.ava2}
          action={handleNavigationAva}></CardButton>
        <CardButton text="Portal Institucional (RM)"
          colorText={theme.colors.ava2}
          action={handleNavigationRM}></CardButton>
      </S.ContainerButton>

      <S.ContainerButton>
        <CardButton text="Sistema de Gestão Acadêmica (SGA)"
          colorText={theme.colors.ava2}
          action={handleNavigationSGA}>
        </CardButton>
        <CardButton text="Minha Biblioteca Virtual"
          colorText={theme.colors.ava2}
          action={handleNavigationLibrary}>
        </CardButton>
      </S.ContainerButton>

      <S.ContainerButtonLinks>
        <Button text="Site UniCatólica" action={handleNavigationSite} />
        <Button text="Contatos" action={handleNavigationContacts} />
      </S.ContainerButtonLinks>

      <S.Footer>2024 © Daniel Holanda</S.Footer>
    </S.Container>
  );
}
