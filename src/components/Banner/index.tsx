import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";

interface BannerProps {
  children: ReactNode;
  imageUrl: string;
  height?: string;
}

const Banner = ({ children, imageUrl, height }: BannerProps) => {
  return (
    <Flex
      as="main"
      w="100%"
      h={height}
      backgroundImage={imageUrl}
      backgroundRepeat="no-repeat"
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
