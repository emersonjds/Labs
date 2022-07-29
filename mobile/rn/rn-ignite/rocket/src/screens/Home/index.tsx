import { Heading, HStack, Text, useTheme, VStack } from 'native-base'
import Filter from '../../components/Filter';
import Header from '../../components/Header';

const Home = () => {

  const { colors } = useTheme()

  return (
    <VStack
      flex={1}
      pb={1}
      bg="gray.700"
    >
      <Header />

      <VStack flex={1} px={6}>
        <HStack
          w={'full'}
          mt={8}
          mb={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading
            color={colors.gray[100]}
          >
            Meus Chamados
          </Heading>
          <Text
            color={colors.gray[200]}
          >
            1
          </Text>
        </HStack>

        <HStack
          justifyContent={'space-between'}
        >
          <Filter title="Em Andamento" type="open" />
          <Filter title="Finalizado" type="closed" />
        </HStack>
      </VStack>



    </VStack>
  );
}

export default Home;