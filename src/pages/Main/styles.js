import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {Animated} from 'react-native';

export const Container = styled.View`
  flex: 1;
  background: #8b10ae;
  padding-top: ${getStatusBarHeight()}px;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  max-height: 350px;
  z-index: 5;
`;
export const CardsContainer = styled(Animated.ScrollView).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  position: absolute;
  height: 340px;
  left: 0;
  right: 0;
  top: 0px;
`;
