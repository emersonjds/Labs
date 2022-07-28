import {Button as ButtonNativeBase, IButtonProps, Heading} from 'native-base'
import {FC} from "react";

type Props = IButtonProps & {
  title: string;
}

const Button: FC<Props> = ({title, ...rest}) => {
  return (
    <ButtonNativeBase
      mt={8}
      height={14}
      bg="green.700"
      fontSize="sm"
      rounded="sm"
      _pressed={{
        bg: "green.500",
      }}
      {...rest}
    >
      <Heading
        color="white"
        fontSize="sm"
      >
        {title ? title : 'Entrar'}
      </Heading>
    </ButtonNativeBase>
  )
}

export default Button;
