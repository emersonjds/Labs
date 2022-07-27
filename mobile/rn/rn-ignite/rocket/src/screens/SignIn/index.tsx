import React from "react";
import {Heading, VStack} from "native-base";

const Index = () => {
  return (
    <VStack
      flex={1}
      alignItems={'center'}
      bg={"gray.600"}
      px={8}
      pt={24}
    >
      <Heading color="gray.100" fontSize={"xl"} mt={20} mb={6}>
        Acesse sua conta
      </Heading>
    </VStack>
  )
}

export default Index;
