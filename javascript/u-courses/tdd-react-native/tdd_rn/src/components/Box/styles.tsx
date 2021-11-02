import styled from 'styled-components/native';
import {
  FlexboxProps,
  ColorProps,
  BorderRadiusProps,
  HeightProps,
  WidthProps,
} from 'styled-system';

type BoxProps = FlexboxProps &
  ColorProps &
  BorderRadiusProps &
  HeightProps &
  WidthProps;

export const Container = styled.View<BoxProps>``;
