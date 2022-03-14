import React from "react";
import { Text, Flex, Image, Box, Link } from "@chakra-ui/react";

const GetInvolved = () => {
  return (
    <Flex
      direction={{ base: "column-reverse", lg: "row" }}
      px={{ base: "8", lg: "36" }}
      pt={{ base: "10", lg: "20" }}
      justifyContent="space-around"
      alignItems="center"
    >
      <Image
        width={{base: "90%", lg: "45%"}}
        src="/get_involved.svg"
        objectFit="fill"
        alt="Landing Illustration"
        mr={{base: "0", lg: "32"}}
        mt={{base: "10", lg: "0"}}
      ></Image>

      <Box>
        <Text fontSize={{ base: "2xl", lg: "4xl" }} fontWeight={700}>
          Get Involved
        </Text>

        <Text fontSize={{base: "xl", lg: "2xl"}} pr={{ base: "0", lg: "24" }} mt={{base: "4", lg: "10"}}>
          You can get stared by either signing up for our{" "}
          <Link color="blue" href="https://forum.dsckiit.in/">
            {" "}
            Forum
          </Link>{" "}
          or joining our
          <Link color="blue" href="https://discord.com/invite/nYQCMKF">
            {" "}
            Discord
          </Link>
          .
        </Text>

        <Text fontSize={{base: "xl", lg: "2xl"}} pr={{ base: "0", lg: "24" }}  mt={{base: "4", lg: "10"}}>
          We conduct in-person meetups twice a month. You can visit this{" "}
          <Link color="blue" href="https://gdsc.community.dev/kalinga-institute-of-industrial-technology-bhubaneswar-1/#upcoming-events">
            {" "}
            link
          </Link>{" "}
          to check the upcoming events.
        </Text>
      </Box>
    </Flex>
  );
};

export default GetInvolved;
