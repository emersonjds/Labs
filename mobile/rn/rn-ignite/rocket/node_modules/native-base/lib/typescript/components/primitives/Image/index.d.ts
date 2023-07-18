import React from 'react';
import { Image as RNImage } from 'react-native';
import type { IImageProps } from './types';
declare const Image: React.MemoExoticComponent<React.ForwardRefExoticComponent<import("./types").InterfaceImageProps & Partial<{}> & React.RefAttributes<unknown>>>;
interface ImageStatics {
    getSize: typeof RNImage.prefetch;
    prefetch: typeof RNImage.prefetch;
    queryCache: typeof RNImage.queryCache;
}
declare const ImageWithStatics: typeof Image & ImageStatics;
export default ImageWithStatics;
export type { IImageProps };
