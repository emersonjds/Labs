import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: black;
  flex: 1;
  padding: 20px;
`;

export const Title = styled.Text`
  color: #fff;
  margin-top: 10px;
  font-weight: bold;
  font-size: 24px;
`;

export const InputText = styled.TextInput`
  padding: 10px;
  background-color: #999;
  margin-top: 20px;
  border-radius: 5px;
`;

export const ButtonAdd = styled.TouchableOpacity`
  height: 52px;
  background-color: blueviolet;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const TextSkill = styled.Text`
  color: #000;
  font-size: 16px;
  background-color: #cecece;
  padding: 10px;
  margin-top: 10px;
`;
