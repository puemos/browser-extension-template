import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
    components: {
      Button: {
        baseStyle: {
          borderRadius: "lg",
        },
      },
    },
  },
});

export default theme;
