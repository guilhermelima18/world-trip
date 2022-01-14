import React from "react";
import Link from "next/link";
import { Box, Image, Text } from "@chakra-ui/react";
import { Carousel as CarouselResponsive } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface ContinentsProps {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface CarouselProps {
  continents: ContinentsProps[];
}

export const Carousel = ({ continents }: CarouselProps) => {
  return (
    <CarouselResponsive autoPlay infiniteLoop>
      {continents.map(({ id, name, image }) => (
        <Link key={id} href={`/continents/${id}`} passHref>
          <Box cursor="pointer">
            <Image
              src={image}
              alt={name}
              style={{ filter: "brightness(80%)" }}
            />
            <Text className="legend">{name}</Text>
          </Box>
        </Link>
      ))}
    </CarouselResponsive>
  );
};
