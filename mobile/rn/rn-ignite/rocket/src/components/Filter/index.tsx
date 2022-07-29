import { IButtonProps, useTheme, Button, Text } from "native-base"
import { FC } from "react";

type FilterProps = IButtonProps & {
  title: string;
  isActive?: boolean;
  type: 'open' | 'closed';
}

const Filter: FC<FilterProps> = (
  {
    title,
    isActive = false,
    type,
  },
  ...rest
) => {

  const { colors } = useTheme()
  const colorType = type === 'open' ? colors.secondary[700] : colors.green[300]

  return (
    <Button
      variant="outline"
      borderColor={colorType}
      borderWidth={isActive ? 1 : 0}
      bgColor="gray.600"
      flex={1}
      size="sm"
      {...rest}
    >
      <Text
        color={isActive ? colorType : "gray.300"}
        fontSize="xs"
        textTransform={"uppercase"}
      >
        {title}
      </Text>
    </Button>
  )
}

export default Filter;