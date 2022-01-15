import { Flex, Heading, Text, Box } from "@chakra-ui/react";
import Link from "next/link";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

interface ContinentsProps {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface CarouselProps {
  continents: ContinentsProps[];
}

export const SwiperCarousel = ({ continents }: CarouselProps) => {
  return (
    <Flex
      w="100%"
      h={["250px", "450px"]}
      maxW="1240px"
      mx="auto"
      mb={["5", "10"]}
    >
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
        }}
        style={{ width: "100%", flex: "1" }}
      >
        {continents.map(({ id, name, image, description }) => (
          <SwiperSlide key={id}>
            <Flex
              w="100%"
              h="100%"
              align="center"
              justify="flex-end"
              direction="column"
              bgImage={`url('${image}')`}
              bgPosition="100% 30%"
              bgRepeat="no-repeat"
              bgSize="cover"
              textAlign="center"
            >
              <Box mb="10">
                <Link href={`/continent/${id}`}>
                  <a>
                    <Heading
                      fontSize={["3xl", "4xl", "5xl"]}
                      color="white"
                      fontWeight="bold"
                    >
                      {name}
                    </Heading>
                    <Text
                      fontWeight="bold"
                      color="white"
                      opacity="0.8"
                      fontSize={["0.8rem", "xl", "1xl"]}
                      mt={["2", "4"]}
                    >
                      {description}
                    </Text>
                  </a>
                </Link>
              </Box>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
};
