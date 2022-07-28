import {Button as ButtonNativeBase, IButtonProps, Heading} from 'native-base'
import {FC} from "react";

type Props = {
  title: string;
}

const Button: FC<Props> = ({title}) => {
  return (
    <ButtonNativeBase
      width={'100%'}
      height={50}
      mt={8}
      bg="green.500"
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
