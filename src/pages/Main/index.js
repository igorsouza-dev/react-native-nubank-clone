import React from 'react';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import AccountCard from '~/components/AccountCard';
import Menu from '~/components/Menu';

import {Container, Content, CardsContainer} from './styles';

export default function Main() {
  return (
    <Container>
      <Header />
      <Content>
        <Menu />
        <CardsContainer>
          <AccountCard />
          <AccountCard />
          <AccountCard />
        </CardsContainer>
      </Content>
      <Tabs />
    </Container>
  );
}
