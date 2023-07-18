declare const _default: {
    baseStyle: (props: Record<string, any>) => {
        _disabled: {
            opacity: number;
        };
        _invalid: {
            borderWidth: number;
            borderRadius: number;
        };
        onThumbColor: string;
        offThumbColor: string;
        _light: {
            offTrackColor: string;
            onTrackColor: string;
            _hover: {
                offTrackColor: string;
                onTrackColor: string;
            };
            _invalid: {
                borderColor: string;
            };
        };
        _dark: {
            offTrackColor: string;
            onTrackColor: string;
            _hover: {
                offTrackColor: string;
                onTrackColor: string;
            };
            _invalid: {
                borderColor: string;
            };
        };
    };
    sizes: {
        sm: {
            style: {
                transform: {
                    scale: number;
                }[];
            };
        };
        md: {};
        lg: {
            style: {
                transform: {
                    scale: number;
                }[];
            };
            margin: number;
        };
    };
    defaultProps: {
        size: string;
        colorScheme: string;
    };
};
export default _default;
