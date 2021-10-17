import styled from 'styled-components';
import Colors from '../../Contants';

export const ButtonSkill = styled.TouchableOpacity`
  height: 50px;
  border-radius: 10px;
  background-color: #999;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const TextSkill = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: ${Colors.white};
`;
