import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 0 20px;
  align-items: stretch;
  justify-content: center;
`;

export const InputLogin = styled.TextInput.attrs({
  placeholderTextColor: "#999"
})`
  height: 52;
  border: 1px;
  border-color: #000;
  border-radius: 10;
  padding: 0 20px;
`;

export const ButtonLogin = styled.TouchableOpacity`
  height: 52;
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

export const Error = styled.Text`
  color: #ff817e;
  margin-bottom: 20px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;
