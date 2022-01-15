import { Flex, Image, Box, Text, Avatar } from "@chakra-ui/react";

interface CountriesProps {
  id: number;
  name: string;
  population: string;
  capitalCountry: string;
  imageCountry: string;
}

interface BoxCountriesProps {
  countries: CountriesProps[];
}

const BoxCountries = ({ countries }: BoxCountriesProps) => {
  return (
    <>
      {countries.map(
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
                <Text my="5" color="gray.900" fontWeight="bold" fontSize="lg">
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
    </>
  );
};

export default BoxCountries;
