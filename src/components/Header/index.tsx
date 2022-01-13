import { useRouter } from "next/router";
import Link from "next/link";
import { Flex, Box, Image, Icon } from "@chakra-ui/react";

const Header = () => {
  const router = useRouter();

  return (
    <Flex
      as="header"
      bg="white"
      py="5"
      alignItems="center"
      justifyContent="center"
    >
      <Box cursor={router.asPath !== "/" ? "pointer" : "initial"}>
        {router.asPath !== "/" ? (
          <Link href="/" passHref>
            <Image src="/assets/logo.svg" alt="Logo world trip" />
          </Link>
        ) : (
          <Image src="/assets/logo.svg" alt="Logo world trip" />
        )}
      </Box>
    </Flex>
  );
};

export default Header;
