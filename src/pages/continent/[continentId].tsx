import Head from "next/head";
import { GetServerSideProps } from "next";
import {
  Flex,
  Box,
  Text,
  HStack,
  VStack,
  SimpleGrid,
  useMediaQuery,
} from "@chakra-ui/react";
import Banner from "../../components/Banner";
import BoxCountries from "../../components/BoxCountries";
import { getContinent } from "../../services/getContinent";

interface CountriesProps {
  id: number;
  name: string;
  population: string;
  capitalCountry: string;
  imageCountry: string;
}

interface ContinentsProps {
  id: number;
  name: string;
  description: string;
  image: string;
  countries: CountriesProps[];
}

interface Props {
  response: ContinentsProps;
}

const Continente = ({ response }: Props) => {
  const [isLessThan1280] = useMediaQuery("(max-width: 1200px)");

  return (
    <>
      <Head>
        <title>{response.name} | World Trip</title>
      </Head>

      <Flex flexDirection="column">
        <Banner key={response.id} imageUrl={response.image} height="550px">
          <Text fontSize="xl">{response.name}</Text>
        </Banner>

        <HStack w="100%" maxW="1200px" mx="auto" px={isLessThan1280 && "10"}>
          <Box w={["80%", "80%", "50%"]}>
            <Text color="gray.900" fontWeight="bold" mb="8" fontSize="3xl">
              {response.name}
            </Text>
            <Text lineHeight={8} color="gray.900">
              {response.description}
            </Text>
          </Box>
        </HStack>

        <VStack
          w="100%"
          maxW="1200px"
          mx="auto"
          spacing="8"
          my="10"
          px={isLessThan1280 && "10"}
        >
          <Text
            w="100%"
            color="gray.900"
            fontSize="3xl"
            fontWeight="bold"
            mt="10"
          >
            Países +100
          </Text>
          <SimpleGrid minChildWidth="250px" spacing={["6", "8"]} width="100%">
            <BoxCountries countries={response.countries} />
          </SimpleGrid>
        </VStack>
      </Flex>
    </>
  );
};

export default Continente;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { continentId } = params;
  const response = await getContinent(continentId);

  return {
    props: { response },
  };
};
