import styled from 'styled-components/native';
import {Image} from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: #fefefe;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Logo = styled(Image)`
  height: 85;
  width: 85;
`;
export const UserInput = styled.TextInput.attrs({
  placeholderTextColor: '#cecece',
})`
  height: 52;
  width: 100%;
  border-width: 1px;
  border-color: #cecece;
  padding: 0px 10px;
  margin-top: 10;
  border-radius: 10px;
  font-size: 16px;
`;

export const ButtonLogin = styled.TouchableOpacity`
  height: 52px;
  margin-top: 10px;
  border-radius: 10px;
  width: 100%;
  background-color: #f8146e;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
