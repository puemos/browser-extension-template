import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Navbar } from "../src/components/Navbar";
import { PropsWithChildren } from "react";

export const ViewWrapper: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <Flex direction="column" height={"100%"}>
      <Box
        overflowY="scroll"
        className="Main"
        flex="1"
        css={{
          "&::-webkit-scrollbar": {
            width: "1rem",
          },
          "&": {
            "scrollbar-width": "thin",
            "scrollbar-color": "#303038 var(--chakra-colors-gray-900)",
          },
          "&::-webkit-scrollbar-track": {
            background: "var(--chakra-colors-gray-900)",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#303038",
            borderRadius: "1rem",
            border: "5px solid var(--chakra-colors-gray-900)",
          },
        }}
      >
        {children}
      </Box>
      <Navbar />
    </Flex>
  );
};
