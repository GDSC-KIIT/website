import React from "react";
import { HStack, Image, Link } from "@chakra-ui/react";

const SocialMediaBar = () => {
  return (
    <HStack width={{ base: "48", lg: "60" }} spacing="4">
      <Link href="https://discord.com/invite/nYQCMKF">
        <Image
          alt="discord"
          src="https://img.icons8.com/ios/50/000000/discord-logo--v1.png"
        ></Image>
      </Link>
      <Link href="https://twitter.com/gdsckiit">
        <Image
          alt="twitter"
          src="https://img.icons8.com/ios/50/000000/twitter--v1.png"
        ></Image>
      </Link>
      <Link href="https://github.com/DSC-KIIT">
        <Image
          alt="github"
          src="https://img.icons8.com/ios/50/000000/github--v1.png"
        ></Image>
      </Link>
      <Link href="https://instagram.com/gdsckiit">
        <Image
          alt="instagram"
          src="https://img.icons8.com/ios/50/000000/instagram-new--v1.png"
        ></Image>
      </Link>
      <Link href="https://medium.com/dsckiit">
        <Image
          alt="medium"
          src="https://img.icons8.com/ios/50/000000/medium-monogram--v1.png"
        ></Image>
      </Link>
    </HStack>
  );
};

export default SocialMediaBar;
