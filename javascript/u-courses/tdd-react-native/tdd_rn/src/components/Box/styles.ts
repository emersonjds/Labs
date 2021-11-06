import { ViewProps } from 'react-native';
import styled from 'styled-components/native';

import {
  FlexboxProps,
  ColorProps,
  BorderRadiusProps,
  HeightProps,
  WidthProps,
  background,
  flex,
  space
} from 'styled-system';

type BoxProps = FlexboxProps &
  ColorProps &
  BorderRadiusProps &
  HeightProps &
  WidthProps &
  ViewProps;

export const Container = styled.View<BoxProps>`
  ${background}
  ${flex}
  ${space}
  flex: 1;
`;
