import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Spinner } from '../../components/Loading/styles';

export const Container = styled.div`
  flex: 1;
  display: flex;
  margin-top: 20px;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #fff;
  ${Spinner} {
    height: 24px;
  }
`;

export const List = styled.div`
  margin-top: 20px;
  display: flex;
`;

export const PlayList = styled(Link)`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 250px;
  text-decoration: none;

  &:first-child {
    margin: 0;
  }

  &:hover img {
    opacity: 0.4;
  }

  img {
    height: 250px;
  }

  strong {
    color: #fff;
    font-size: 13px;
    margin-top: 10px;
  }

  p {
    line-height: 22px;
    margin-top: 5px;
    font-size: 13px;
    color: #b3b3b3;
  }
`;
