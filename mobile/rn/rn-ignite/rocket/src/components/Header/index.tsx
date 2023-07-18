import { HStack, IconButton, useTheme } from "native-base"
import { SignOut } from "phosphor-react-native"
import Logo from '../../assets/logo_secondary.svg';

const Header = () => {

  const { colors } = useTheme()

  return (
    <HStack
      w="full"
      justifyContent="space-between"
      alignItems="center"
      bg="gray.500"
      pt={12}
      pb={5}
      px={6}
    >
      <Logo />
      <IconButton
        icon={
          <SignOut
            size={26}
            color={colors.gray[300]}
          />
        }
      />
    </HStack>
  )
}

export default Header;