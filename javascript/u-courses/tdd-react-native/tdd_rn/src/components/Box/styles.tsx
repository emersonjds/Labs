import { JSXElementConstructor } from 'react';
import { ViewProps } from 'react-native';
import styled from 'styled-components/native';

import {
  color,
  flex,
  space,
  ColorProps,
  HeightProps,
  FlexboxProps,
  BorderRadiusProps,
  WidthProps,
  SpaceProps,
  BorderProps,
  PositionProps,
} from 'styled-system';

type BoxProps =
  | SpaceProps
  | ColorProps
  | HeightProps
  | ViewProps
  | BorderProps
  | BorderRadiusProps
  | FlexboxProps
  | WidthProps
  | PositionProps;

export const BoxFull = styled.View<BoxProps>`
  ${color}
  ${space}
  ${flex}
  flex: 1;
  position: relative;
`;

export const Box = styled.View<BoxProps>`
  ${color}
  ${space}
  ${flex}
	position: relative;
`;
