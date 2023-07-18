import React from 'react';
export declare const ToastProvider: ({ children }: {
    children: any;
}) => JSX.Element;
export declare const useToast: () => {
    show: (props: import("./types").InterfaceToastProps) => any;
    close: (id: any) => void;
    closeAll: () => void;
    isActive: (id: any) => boolean;
};
export declare type IToastService = ReturnType<typeof useToast>;
export declare const ToastRef: React.MutableRefObject<{
    show: (props: import("./types").InterfaceToastProps) => any;
    close: (id: any) => void;
    closeAll: () => void;
    isActive: (id: any) => boolean;
}>;
export declare const Toast: IToastService;
