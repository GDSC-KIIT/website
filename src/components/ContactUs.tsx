import React from "react";
import { Text, Flex, Box, Link, Spacer } from "@chakra-ui/react";
import SocialMediaBar from "../common/SocialMediaBar";

const ContactUs = () => {
  return (
    <Box px={{ base: "8", lg: "36" }} pt={{ base: "10", lg: "14" }} id="contact-us-section">
      <Text fontSize={{ base: "2xl", lg: "4xl" }} fontWeight={700}>
        Contact Us
      </Text>

      <Text fontSize={{ base: "lg", lg: "xl" }} mt="4">
        Sign up on our{" "}
        <Link color="blue" href="https://forum.dsckiit.in/">
          {" "}
          Forum
        </Link>{" "}
        or
      </Text>

      <Text fontSize={{ base: "lg", lg: "xl" }} mb={{ base: "6", lg: "2" }}>
        Write to us at{" "}
        <Link color="blue" href="mailto:mail@dsckiit.in">
          mail@dsckiit.in
        </Link>
      </Text>

      <Flex
        direction={{ base: "column", lg: "row" }}
        alignItems={{ base: "left", lg: "center" }}
      >
        <Box mb={{ base: "3", lg: "0" }}>
          <SocialMediaBar></SocialMediaBar>
        </Box>

        <Spacer></Spacer>

        <Flex alignItems={"left"} direction={{ base: "column", lg: "row" }}>
          <Link
            fontSize={{ base: "lg", lg: "xl" }}
            color={"gray.500"}
            href="https://medium.com/dsckiit"
            isExternal
            px={{ base: "0", lg: "4" }}
            py={{ base: "3", lg: "4" }}
          >
            Blog
          </Link>
          <Link
            fontSize={{ base: "lg", lg: "xl" }}
            color={"gray.500"}
            href="https://forum.dsckiit.in"
            isExternal
            px={{ base: "0", lg: "4" }}
            py={{ base: "3", lg: "4" }}
          >
            Forum
          </Link>
          <Link
            fontSize={{ base: "lg", lg: "xl" }}
            color={"gray.500"}
            href="https://gdsc.community.dev/kalinga-institute-of-industrial-technology-bhubaneswar-1/#upcoming-events"
            isExternal
            px={{ base: "0", lg: "4" }}
            py={{ base: "3", lg: "4" }}
          >
            Events
          </Link>
          <Link
            fontSize={{ base: "lg", lg: "xl" }}
            color={"gray.500"}
            href="https://gdsc.community.dev/kalinga-institute-of-industrial-technology-bhubaneswar-1/#team-list"
            isExternal
            px={{ base: "0", lg: "4" }}
            py={{ base: "3", lg: "4" }}
          >
            Team
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ContactUs;
