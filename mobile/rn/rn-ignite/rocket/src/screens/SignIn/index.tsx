import React from "react";
import {Heading, Icon, VStack, useTheme} from "native-base";
import Logo from "../../assets/logo_primary.svg"
import Input from "../../components/Input";
import {Envelope, Key} from 'phosphor-react-native'
import Button from "../../components/Button";

const SignIn = () => {

  const {colors} = useTheme();

  return (
    <VStack
      flex={1}
      alignItems={'center'}
      bg={"gray.600"}
      px={8}
      pt={24}
    >
      <Logo/>
      <Heading color="gray.100" fontSize={"xl"} mt={20} mb={6}>
        Acesse sua conta
      </Heading>
      <Input
        placeholder={'E-mail'}
        mb={5}
        InputLeftElement={<Icon
          as={<Envelope color={colors.gray[300]}/>}
          ml={5}
        />
        }
      />
      <Input
        placeholder={'Senha'}
        InputLeftElement={<Icon
          as={<Key color={colors.gray[300]}/>}
          ml={5}
        />
        }
        secureTextEntry={true}
      />

      <Button
        title="Entrar"
        w="full"
      />
    </VStack>
  )
}

export default SignIn;
