import { Box, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { runtime } from "webextension-polyfill";

const AboutView = () => {
  return (
    <Stack spacing="1rem" p="1rem" pr="0rem">
      <Stack
        p="1rem"
        rounded="lg"
        bg="gray.800"
        isInline
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Text fontSize="md" fontWeight="semibold">
            <span
              aria-label="plant"
              role="img"
              style={{ marginRight: "0.5rem" }}
            >
              🌱
            </span>
            Version
          </Text>
        </Box>
        <Box>{runtime.getManifest().version}</Box>
      </Stack>
    </Stack>
  );
};

export default AboutView;
