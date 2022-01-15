import { useEffect, useState } from "react";
import Head from "next/head";
import {
  Flex,
  Heading,
  Text,
  VStack,
  Image,
  useMediaQuery,
} from "@chakra-ui/react";
import Banner from "../components/Banner";
import { SwiperCarousel } from "../components/SwiperCarousel";
import WorldEnvironments from "../components/WorldEnvironments";
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
  const [isLessThan780] = useMediaQuery("(max-width: 780px)");

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
          <VStack
            alignItems="flex-start"
            justifyContent="center"
            px={isLessThan780 && "10"}
          >
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
          {!isLessThan780 && (
            <VStack justifyContent="center" mb="-60px">
              <Image src="/assets/airplane.svg" alt="Avião nas nuvens" />
            </VStack>
          )}
        </Banner>

        <WorldEnvironments />

        <VStack my="10">
          <Heading color="gray.900" textAlign="center">
            Vamos nessa?
            <br />
            Então escolha seu continente.
          </Heading>
        </VStack>

        <SwiperCarousel continents={continents} />
      </Flex>
    </>
  );
};

export default Home;
