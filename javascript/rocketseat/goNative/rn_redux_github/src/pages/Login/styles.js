import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: #7159c1;
  align-items: stretch;
  /* faz com que todos os itens do container tenham largura total ao tamanho da tela */
  justify-content: center;
  padding: 30px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#999"
})`
  background: #fff;
  border-radius: 4px;
  padding: 0 20px;
  height: 52px;
  font-size: 16;
  color: #333;
`;

export const Button = styled.TouchableOpacity`
  background: #5dc4b3;
  border-radius: 4px;
  padding: 0 20px;
  height: 52px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const Error = styled.Text`
  color: #ff817e;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: bold;
`;
