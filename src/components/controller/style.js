import Styled from 'styled-components/native';

export const Box = Styled.View`
  margin-top: 10;
  margin-bottom: 10;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Text = Styled.Text`
  color: #F0F0F0;
`;

export const SubTitle = Styled.Text`
  color: #F0F0F0;
  font-size: 15;
  margin-top: 10;
  margin-left: 10;
`;

export const Button = Styled.TouchableOpacity`
  padding-left: 10;
  padding-right: 10;
  padding-top: 5;
  padding-bottom: 5;
  border: #F0F0F0;
  border-radius: 5;
`;
