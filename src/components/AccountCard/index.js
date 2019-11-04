import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Title,
  Description,
  Annotation,
} from './styles';

export default function AccountCard() {
  return (
    <Card>
      <CardHeader>
        <Icon name="attach-money" color="#666" size={28} />
        <Icon name="visibility-off" color="#666" size={28} />
      </CardHeader>
      <CardContent>
        <Title>Saldo disponível</Title>
        <Description>R$ 1.200.365,00</Description>
      </CardContent>
      <CardFooter>
        <Annotation>
          Transferência de R$ 200,00 recebida de Fernanda Tavares hoje às 06:00h
        </Annotation>
      </CardFooter>
    </Card>
  );
}
