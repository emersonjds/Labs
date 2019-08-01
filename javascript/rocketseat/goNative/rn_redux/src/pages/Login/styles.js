import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`;

export const Title = styled.Text`
  font-size: 15;
`;

export const InputText = styled.TextInput`
  height: 52;
  width: 100%;
  border-radius: 10px;
  border-color: #cecece;
  border-width: 1px;
  margin-top: 10px;
  padding-left: 10px;
`;

export const ButtonLogin = styled.TouchableOpacity`
  height: 52;
  width: 100%;
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
