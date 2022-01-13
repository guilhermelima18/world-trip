import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";

interface BannerProps {
  children: ReactNode;
  imageUrl: string;
}

const Banner = ({ children, imageUrl }: BannerProps) => {
  return (
    <Flex
      as="main"
      w="100%"
      h="300px"
      backgroundImage={imageUrl}
      backgroundPosition="center"
      backgroundSize="cover"
      mb="10"
    >
      <Flex w="100%" maxW="1200px" mx="auto" justifyContent="space-between">
        {children}
      </Flex>
    </Flex>
  );
};

export default Banner;
