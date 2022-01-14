import Head from "next/head";
import { GetServerSideProps } from "next";
import {
  Box,
  Text,
  HStack,
  VStack,
  SimpleGrid,
  Image,
  Flex,
  Avatar,
} from "@chakra-ui/react";
import Banner from "../../components/Banner";
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
  console.log(response);
  return (
    <>
      <Head>
        <title>{response.name} | World Trip</title>
      </Head>

      <Banner key={response.id} imageUrl={response.image} height="550px">
        <Text fontSize="xl">{response.name}</Text>
      </Banner>

      <HStack w="100%" maxW="1200px" mx="auto">
        <Box w="50%">
          <Text color="gray.900" fontWeight="bold" mb="8" fontSize="3xl">
            {response.name}
          </Text>
          <Text lineHeight={8} color="gray.900">
            {response.description}
          </Text>
        </Box>
      </HStack>

      <VStack w="100%" maxW="1200px" mx="auto" spacing="8" my="10">
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
          {response.countries.map(
            ({ id, name, population, capitalCountry, imageCountry }) => (
              <Flex
                key={id}
                flexDir="column"
                border="1px solid"
                borderColor="yellow.400"
                borderRadius="sm"
                justifyContent="center"
              >
                <Image w="100%" src={imageCountry} alt={name} />
                <Flex
                  alignItems="center"
                  justifyContent="space-between"
                  px="5"
                  mt="5"
                >
                  <Box>
                    <Text
                      my="5"
                      color="gray.900"
                      fontWeight="bold"
                      fontSize="lg"
                    >
                      País: {name}
                    </Text>
                    <Text my="2" color="gray.900" fontSize="sm">
                      Capital: {capitalCountry}
                    </Text>
                    <Text my="2" color="gray.900" fontSize="sm">
                      População: {population}
                    </Text>
                  </Box>
                  <Avatar src={imageCountry} size="md" name={name} />
                </Flex>
              </Flex>
            )
          )}
        </SimpleGrid>
      </VStack>
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
