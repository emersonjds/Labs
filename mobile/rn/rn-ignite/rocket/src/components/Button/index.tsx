import {Button as ButtonNativeBase, IButtonProps, Heading} from 'native-base'
import {FC} from "react";

type Props = IButtonProps & {
  title: string;
}

const Button: FC<Props> = ({title, ...rest}) => {
  return (
    <ButtonNativeBase
      {...rest}
    >
      <Heading
        color="white"
        fontSize="xl"
      >
        {title ? title : 'Entrar'}
      </Heading>
    </ButtonNativeBase>
  )
}

export default Button;
