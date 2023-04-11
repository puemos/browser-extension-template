import React from "react";
import { Box, ChakraProvider, ColorModeScript, Flex } from "@chakra-ui/react";
import type { Preview } from "@storybook/react";
import { BrowserRouter as Router } from "react-router-dom";
import theme from "../src/theme";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <ChakraProvider theme={theme}>
          <Router>
            <Box
              bg="gray.900"
              width="500px"
              height="500px"
              borderWidth={"2px"}
              borderColor={"white"}
            >
              <Story />
            </Box>
          </Router>
        </ChakraProvider>
      </>
    ),
  ],
};

export default preview;
