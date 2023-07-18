import { ViewStyle } from 'react-native';
export interface IOverlayProps {
    isOpen?: boolean;
    children?: any;
    useRNModalOnAndroid?: boolean;
    onRequestClose?: (() => any) | undefined;
    isKeyboardDismissable?: boolean;
    animationPreset?: 'fade' | 'slide' | 'none';
    style?: ViewStyle;
    unmountOnExit?: boolean;
}
export declare function Overlay({ children, isOpen, useRNModalOnAndroid, isKeyboardDismissable, animationPreset, onRequestClose, style, unmountOnExit, }: IOverlayProps): JSX.Element | null;
