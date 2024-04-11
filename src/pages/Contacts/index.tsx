import React from 'react';
import { FlatList, Linking } from 'react-native';

import mock from "../../constants/contatos";

import * as S from "./styles";
import Button from '../../Components/Button';


export default function Contacts() {

  const openWhatsApp = (contact: { id: string, name: string, number: string }) => {
    Linking.openURL(`whatsapp://send?phone=${contact.number}`);
  };

  return (
    <S.Container>
      {/* <S.List>
        {mock.map((contact) => (
          <Button
            key={contact.id}
            text={contact.name}
            action={() => openWhatsApp(contact)} />
        ))}
      </S.List> */}

      <S.List
        data={mock}
        renderItem={({ item }) => (
          <Button
            key={item.id}
            text={item.name}
            action={() => openWhatsApp(item)}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
      <S.Footer>2024 © Daniel Holanda</S.Footer>

    </S.Container >
  );
}
