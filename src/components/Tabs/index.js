import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, TabsContainer, TabsItem, TabText} from './styles';

export default function Tabs() {
  return (
    <Container>
      <TabsContainer>
        <TabsItem>
          <Icon name="person-add" size={24} color="#fff" />
          <TabText>Indicar Amigos</TabText>
        </TabsItem>
        <TabsItem>
          <Icon name="chat-bubble-outline" size={24} color="#fff" />
          <TabText>Cobrar</TabText>
        </TabsItem>
        <TabsItem>
          <Icon name="arrow-downward" size={24} color="#fff" />
          <TabText>Depositar</TabText>
        </TabsItem>
        <TabsItem>
          <Icon name="arrow-upward" size={24} color="#fff" />
          <TabText>Transferir</TabText>
        </TabsItem>
        <TabsItem>
          <Icon name="lock" size={24} color="#fff" />
          <TabText>Bloquear cartão</TabText>
        </TabsItem>
      </TabsContainer>
    </Container>
  );
}
