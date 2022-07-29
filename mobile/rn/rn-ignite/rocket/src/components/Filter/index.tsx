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

  return (

    <Button
      w="45%"
      variant="outline"
    >
      <Text
        color="white"
      >
        {title}
      </Text>
    </Button>
  )
}

export default Filter;