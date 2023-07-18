import React from 'react';
import type { IPopperProps, IPopoverArrowProps } from './types';
declare const Popper: {
    (props: IPopperProps & {
        triggerRef: any;
        onClose: any;
        setOverlayRef?: ((overlayRef: any) => void) | undefined;
    }): JSX.Element;
    Content: React.ForwardRefExoticComponent<import("../../primitives/Box").InterfaceBoxProps<null> & {
        isOpen: boolean;
    } & React.RefAttributes<unknown>>;
    Arrow: React.ForwardRefExoticComponent<IPopoverArrowProps & import("../../primitives/Box").InterfaceBoxProps<IPopoverArrowProps> & React.RefAttributes<unknown>>;
};
export { Popper };
