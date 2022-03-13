import React from "react";
import { Text, Flex, Image, Box, Link } from "@chakra-ui/react";

const GetInvolved = () => {
  return (
    <Flex
      direction={{ base: "column", lg: "row" }}
      px={{ base: "0", lg: "36" }}
      py={{ base: "0", lg: "20" }}
      justifyContent="space-around"
      alignItems="center"
    >
      <Image
        width={"45%"}
        src="/get_involved.svg"
        objectFit="fill"
        alt="Landing Illustration"
        mr="32"
      ></Image>

      <Box>
        <Text fontSize="4xl" fontWeight={700}>
          Get Involved
        </Text>

        <Text fontSize="2xl" pr="24" mt="10">
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

        <Text fontSize="2xl" pr="24" mt="10">
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
