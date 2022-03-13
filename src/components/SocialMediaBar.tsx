import React from "react";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialMediaBar = () => {
  return <FontAwesomeIcon icon={faCoffee} />;
};

export default SocialMediaBar;


// <HStack spacing={spacing} width={width}>
//       <FontAwesomeIcon icon={faTwitter} href="https://twitter.com/DscKiit"></FontAwesomeIcon>
//       <FontAwesomeIcon icon={faInstagram} href="https://www.instagram.com/dsckiit/"></FontAwesomeIcon>
//       <FontAwesomeIcon icon={faLinkedin} href="https://www.linkedin.com/company/dsckiit/"></FontAwesomeIcon>
//       <FontAwesomeIcon icon={faDiscord} href="https://discord.com/invite/nYQCMKF"></FontAwesomeIcon>
//     </HStack>