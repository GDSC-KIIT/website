import { extendTheme, ThemeConfig } from "@chakra-ui/react";

import "@fontsource/dm-sans"

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  fonts: {
    heading: "DM Sans",
    body: "DM Sans",
  },
  config: config,
});

export default theme;