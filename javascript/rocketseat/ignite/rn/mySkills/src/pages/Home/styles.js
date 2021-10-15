import styled from 'styled-components/native';
import Colors from '../../Contants';

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.black};
  padding: 30px;
`;

export const Title = styled.Text`
  color: ${Colors.white}
  font-size: 20px;
`;

export const InputDefault = styled.TextInput.attrs({
  placeholderTextColor: Colors.white,
})`
  background-color: ${Colors.gray};
  border-radius: 10px;
  padding: 15px;
  margin-top: 10px;
`;

export const ButtonAdd = styled.TouchableOpacity`
  background-color: ${Colors.magenta};
  border-radius: 10px;
  padding: 15px;
  margin-top: 10px;
  align-items: center;

  `

export const TextButtonAdd = styled.Text`
    color: ${Colors.white};
    font-size: 20px;
    font-weight: bold;
    `;
