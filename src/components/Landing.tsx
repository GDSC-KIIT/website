import React from "react";
import { Text, Flex, Image, Box } from "@chakra-ui/react";
import SocialMediaBar from "../common/SocialMediaBar";

const Landing = () => {
  return (
    <Flex
      direction={{ base: "column", lg: "row" }}
      px={{ base: "0", lg: "36" }}
      pt={{ base: "0", lg: "20" }}
      justifyContent="space-around"
    >
      <Box ml="3">
        <Text fontSize="4xl" fontWeight={700}>
          Design. Develop. Build
        </Text>

        <Text fontSize="2xl" pr="24" mt="10">
          GDSC KIIT is a tech club here at KIIT focused on building a community
          for student developers interested in solving problems with technology.{" "}
        </Text>

        <Text fontSize="2xl" pr="24" mt="10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
          eligendi nobis ullam rem fuga id! Numquam, voluptatem architecto
          recusandae deserunt esse ratione cupiditate officiis ad, eaque
          molestias saepe!
        </Text>

        <Text fontSize="2xl" pr="24" mt="10">
          We try to build an inclusive community for the students who want to
          learn and grow together.
        </Text>

        <Box mt="10">
          <SocialMediaBar></SocialMediaBar>
        </Box>
      </Box>

      <Image
        width={"45%"}
        src="/landing.svg"
        objectFit="fill"
        alt="Landing Illustration"
      ></Image>
    </Flex>
  );
};

export default Landing;
