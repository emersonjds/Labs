import React from "react";
import {Heading, Icon, VStack} from "native-base";
import Logo from "../../assets/logo_primary.svg"
import Input from "../../components/Input";

const Index = () => {
  return (
    <VStack
      flex={1}
      alignItems={'center'}
      bg={"gray.600"}
      px={8}
      pt={24}
    >
      <Logo />
      <Heading color="gray.100" fontSize={"xl"} mt={20} mb={6}>
        Acesse sua conta
      </Heading>
      <Input
        placeholder={'E-mail'}
        mb={5}
        InputLeftElement={<Icon as  />}
      />
      <Input
        placeholder={'Senha'}
      />
    </VStack>
  )
}

export default Index;
