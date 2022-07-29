import { useTheme, VStack } from 'native-base'
import Header from '../../components/Header';

const Home = () => {

  return (
    <VStack
      flex={1}
      pb={1}
      bg="gray.700"
    >
      <Header />
    </VStack>
  );
}

export default Home;