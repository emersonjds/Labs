import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: stretch;
  justify-content: center;
  padding: 0 20px;
`;

export const InputText = styled.TextInput.attrs({
  placeholderTextColor: '#cecece',
})`
  height: 52;
  border-radius: 10px;
  border-color: #cecece;
  border-width: 1px;
  margin-top: 10px;
  padding-left: 10px;
`;

export const ButtonLogin = styled.TouchableOpacity`
  height: 52;
  background-color: purple;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const TextError = styled.Text`
  font-size: 16;
  font-weight: bold;
  color: red;
  text-align: center;
`;
