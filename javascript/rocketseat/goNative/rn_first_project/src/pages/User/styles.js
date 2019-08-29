import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 20px 30px;
`;

export const Header = styled.View`
  border-bottom-width: 1px;
  border-color: #cecece;
  padding: 10px 15px;
  align-self: stretch;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.Image`
  height: 100px;
  width: 100px;
  border-radius: 50px;
  background: #eee;
`;

export const Name = styled.Text`
  text-align: center;
`;

export const Bio = styled.Text`
  text-align: center;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const ContainerRepo = styled.View`
  background: #f5f5f5;
  border-radius: 4px;
  padding: 10px 15px;
  margin-bottom: 20px;
  align-items: center;
  flex-direction: row;
`;

export const AvatarRepo = styled.Image`
  height: 42px;
  width: 42px;
  border-radius: 21px;
`;

export const Info = styled.View`
  margin-left: 10px;
  flex: 1;
`;

export const OwnerRepo = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #333;
`;

export const RepoDescription = styled.Text`
  font-size: 13px;
  color: #666;
  margin-top: 2px;
`;
