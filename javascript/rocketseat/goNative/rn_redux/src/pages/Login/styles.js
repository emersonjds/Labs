import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  align-items: center;
  justify-content: center;
`;

export const InputLogin = styled.TextInput`
  height: 52;
  width: 100%;
  border: 1px;
  border-color: #000;
  border-radius: 10;
`;

export const ButtonLogin = styled.TouchableOpacity`
  height: 52;
  width: 100%;
  margin-top: 15;
  align-items: center;
  justify-content: center;
  border: 1px;
  border-color: #000;
  background-color: orange;
  border-radius: 10;
`;

export const TextButton = styled.Text`
  font-size: 16;
  font-weight: 500;
`;
