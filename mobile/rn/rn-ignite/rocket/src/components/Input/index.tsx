import {Input as NativeBaseInput, IInputProps} from "native-base";

const Input = ({...rest}: IInputProps) => {
  return (
    <NativeBaseInput
      bg="gray.700"
      height={14}
      size="md"
      borderWidth={0}
      fontSize="md"
      color="white"
      placeholderTextColor="gray.300"
      {...rest}
    />
  )
}

export default Input;
