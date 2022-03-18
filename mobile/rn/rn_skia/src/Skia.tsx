import React from 'react';
import { Canvas, Circle, Group } from '@shopify/react-native-skia';

export const SkiaDemo = () => {
  const width = 256;
  const height = 256;
  const r = 215;
  return (
    <Canvas style={{ flex: 1 }}>
      <Group blendMode="multiply">
        <Circle cx={r} cy={r} r={r} color="red" />
        <Circle cx={width - r} cy={r} r={r} color="blue" />
        <Circle cx={width / 2} cy={height - r} r={r} color="yellow" />
      </Group>
    </Canvas>
  );
};
