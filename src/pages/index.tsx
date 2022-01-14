import { useEffect, useState } from "react";
import Head from "next/head";
import {
  Flex,
  Heading,
  Text,
  VStack,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import Banner from "../components/Banner";
import { Carousel } from "../components/Carousel";
import { api } from "../services/api";

interface HomeProps {
  id: number;
  name: string;
  description: string;
  image: string;
}

const Home = () => {
  const imageUrl = "/assets/background.svg";
  const [continents, setContinents] = useState<HomeProps[]>([]);

  useEffect(() => {
    async function getContinents() {
      const response = await api.get("/continents");

      if (response) {
        if (response.status === 200) {
          setContinents(response.data);
        }
      }
    }

    getContinents();
  }, []);

  return (
    <>
      <Head>
        <title>Home | World Trip</title>
      </Head>
      <Flex flexDirection="column">
        <Banner imageUrl={imageUrl} height="300px">
          <VStack justifyContent="center">
            <Heading size="lg" mb="5">
              5 Continentes,
              <br />
              infinitas possibilidades.
            </Heading>
            <Text fontSize="sm">
              Chegou a hora de tirar do papel a viagem que você
              <br />
              sempre sonhou.
            </Text>
          </VStack>
          <VStack justifyContent="center" mb="-60px">
            <Image src="/assets/airplane.svg" alt="Avião nas nuvens" />
          </VStack>
        </Banner>

        <VStack w="100%" maxW="1200px" mx="auto" spacing="8" my="10">
          <SimpleGrid minChildWidth="200px" spacing={["6", "8"]} width="100%">
            <VStack justifyContent="center">
              <Image src="/assets/cocktail.svg" alt="Cocktail" />
              <Text color="gray.900" mt="5">
                vida noturna
              </Text>
            </VStack>
            <VStack justifyContent="center">
              <Image src="/assets/surf.svg" alt="Cocktail" />
              <Text color="gray.900" mt="5">
                praia
              </Text>
            </VStack>
            <VStack justifyContent="center">
              <Image src="/assets/building.svg" alt="Cocktail" />
              <Text color="gray.900" mt="5">
                moderno
              </Text>
            </VStack>
            <VStack justifyContent="center">
              <Image src="/assets/museum.svg" alt="Cocktail" />
              <Text color="gray.900" mt="5">
                clássico
              </Text>
            </VStack>
            <VStack justifyContent="center">
              <Image src="/assets/earth.svg" alt="Cocktail" />
              <Text color="gray.900" mt="5">
                e mais
              </Text>
            </VStack>
          </SimpleGrid>
        </VStack>

        <VStack my="10">
          <Heading color="gray.900" textAlign="center">
            Vamos nessa?
            <br />
            Então escolha seu continente.
          </Heading>
        </VStack>

        <VStack w="100%" maxW="1200px" mx="auto" spacing="8" my="10">
          <Carousel continents={continents} />
        </VStack>
      </Flex>
    </>
  );
};

export default Home;
