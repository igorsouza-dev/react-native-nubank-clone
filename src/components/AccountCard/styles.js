import styled from 'styled-components/native';

export const Card = styled.View`
  flex: 1;
  background: #fff;
  border-radius: 4px;
  margin: 0 20px;
  height: 100%;
  max-width: 320px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

export const CardContent = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
`;

export const CardFooter = styled.View`
  padding: 30px;
  background: #eee;
  border-radius: 3px;
`;

export const Title = styled.Text`
  font-size: 13px;
  color: #999;
`;
export const Description = styled.Text`
  font-size: 32px;
  margin-top: 3px;
  color: #333;
`;
export const Annotation = styled.Text`
  font-size: 12px;
  color: #333;
`;
