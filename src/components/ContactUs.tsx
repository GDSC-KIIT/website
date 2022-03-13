import React from "react";
import { Text, HStack, Box, Link, Spacer } from "@chakra-ui/react";
import SocialMediaBar from "../common/SocialMediaBar";

const ContactUs = () => {
  return (
    <Box px={{ base: "0", lg: "36" }}>
      <Text fontSize={"4xl"} fontWeight={700}>
        Contact Us
      </Text>
      <Text fontSize="xl">
        Sign up on our{" "}
        <Link color="blue" href="https://forum.dsckiit.in/">
          {" "}
          Forum
        </Link>{" "}
        or
      </Text>
      <Text fontSize="xl">
        Write to us at{" "}
        <Link color="blue" href="mailto:mail@dsckiit.in">
          mail@dsckiit.in
        </Link>
      </Text>

      <HStack>
        <Box>
          <Box mt="5">
            <SocialMediaBar></SocialMediaBar>
          </Box>
        </Box>

        <Spacer></Spacer>

        <Box>
          <HStack alignItems={"left"} spacing="10">
            <Link
              fontSize="xl"
              color={"gray.500"}
              href="https://medium.com/dsckiit"
              isExternal
            >
              Blog
            </Link>
            <Link
              fontSize="xl"
              color={"gray.500"}
              href="https://forum.dsckiit.in"
              isExternal
            >
              Forum
            </Link>
            <Link
              fontSize="xl"
              color={"gray.500"}
              href="https://gdsc.community.dev/kalinga-institute-of-industrial-technology-bhubaneswar-1/#upcoming-events"
              isExternal
            >
              Events
            </Link>
            <Link
              fontSize="xl"
              color={"gray.500"}
              href="https://gdsc.community.dev/kalinga-institute-of-industrial-technology-bhubaneswar-1/#team-list"
              isExternal
            >
              Team
            </Link>
          </HStack>
        </Box>
      </HStack>
    </Box>
  );
};

export default ContactUs;
