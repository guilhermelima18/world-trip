import { VStack, SimpleGrid, Image, Text } from "@chakra-ui/react";

const WorldEnvironments = () => {
  return (
    <VStack w="100%" maxW="1200px" mx="auto" spacing="8" my="10">
      <SimpleGrid minChildWidth="200px" spacing={["6", "8"]} width="100%">
        <VStack justifyContent="center">
          <Image src="/assets/cocktail.svg" alt="Cocktail" />
          <Text color="gray.900" mt="5" fontWeight="bold">
            vida noturna
          </Text>
        </VStack>
        <VStack justifyContent="center">
          <Image src="/assets/surf.svg" alt="Cocktail" />
          <Text color="gray.900" mt="5" fontWeight="bold">
            praia
          </Text>
        </VStack>
        <VStack justifyContent="center">
          <Image src="/assets/building.svg" alt="Cocktail" />
          <Text color="gray.900" mt="5" fontWeight="bold">
            moderno
          </Text>
        </VStack>
        <VStack justifyContent="center">
          <Image src="/assets/museum.svg" alt="Cocktail" />
          <Text color="gray.900" mt="5" fontWeight="bold">
            clássico
          </Text>
        </VStack>
        <VStack justifyContent="center">
          <Image src="/assets/earth.svg" alt="Cocktail" />
          <Text color="gray.900" mt="5" fontWeight="bold">
            e mais
          </Text>
        </VStack>
      </SimpleGrid>
    </VStack>
  );
};

export default WorldEnvironments;
