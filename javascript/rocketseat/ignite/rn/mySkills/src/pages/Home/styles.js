import styled from 'styled-components/native';
import Colors from '../../Contants';
import { space } from 'styled-system';

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.black};
  padding: 30px;
`;

export const Title = styled.Text`
  color: ${Colors.white}
  font-size: 20px;
  ${space}
`;

export const InputDefault = styled.TextInput.attrs({
  placeholderTextColor: Colors.white,
})`
  background-color: ${Colors.gray};
  border-radius: 10px;
  padding: 15px;
  margin-top: 10px;
  color: ${Colors.white};
`;
