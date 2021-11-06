import { ViewProps } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import {
  FlexboxProps,
  ColorProps,
  BorderRadiusProps,
  HeightProps,
  WidthProps,
} from 'styled-system';

type ContainerGradientProps = FlexboxProps &
  ColorProps &
  BorderRadiusProps &
  HeightProps &
  WidthProps &
  ViewProps;

export const ContainerGradient = styled.View(LinearGradient).attrs({
  colors: ($props: any) => [$props.colorOne, $props.colorTwo],
})<ContainerGradientProps>``;
