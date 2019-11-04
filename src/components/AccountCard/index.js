import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Title,
  Description,
  Annotation,
  CardHeaderButton,
} from './styles';

export default function AccountCard() {
  const [isVisible, setIsVisible] = useState(true);

  function toggleVisibility() {
    setIsVisible(!isVisible);
  }

  return (
    <Card>
      <CardHeader>
        <Icon name="attach-money" color="#666" size={28} />
        <CardHeaderButton onPress={toggleVisibility}>
          <Icon
            name={!isVisible ? 'visibility' : 'visibility-off'}
            color="#666"
            size={28}
          />
        </CardHeaderButton>
      </CardHeader>
      <CardContent>
        <Title>Saldo disponível</Title>
        <Description isVisible={isVisible}>R$ 1.200.365,00</Description>
      </CardContent>
      <CardFooter>
        <Annotation>
          Transferência de R$ 200,00 recebida de Fernanda Tavares hoje às 06:00h
        </Annotation>
      </CardFooter>
    </Card>
  );
}
