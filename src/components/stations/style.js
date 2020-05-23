import Styled from 'styled-components/native';

export const BoxStations = Styled.View`
  flex: 1;
`;
export const BoxStation = Styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10;
  margin-left: 10;
  margin-right: 10;
`;
export const BoxQuality = Styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Title = Styled.Text`
  color: #F0F0F0;
  text-align: center;
  font-size: 20px;
`;
export const SubTitle = Styled.Text`
  color: #F0F0F0;
  font-size: 15;
  margin-top: 10;
  margin-left: 10;
`;

export const NameStation = Styled.Text`
  color: #F0F0F0;
  width: 100;
  border-left-width: ${props => (props.isCurrent ? 3 : 0)};
  border-left-color: #27AE60;
  padding-left: ${props => (props.isCurrent ? 10 : 0)};
`;

export const Text = Styled.Text`
  color: ${props => (props.noListed ? '#95A5A6' : '#F0F0F0')};
  text-align: center;
  border-bottom-width: ${props => (props.isCurrent ? 1 : 0)};
  border-bottom-color: ${props => (props.isCurrent ? '#27AE60' : '#F0F0F0')};
  text-decoration: ${props => (props.noListed ? 'line-through' : 'none')};
`;
