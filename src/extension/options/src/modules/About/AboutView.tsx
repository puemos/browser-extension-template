import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  version: string;
}

const AboutView = ({ version }: Props) => {
  return (
    <Stack spacing="1rem" p="1rem" pr="0rem">
      <Heading fontSize="lg" fontWeight="semibold">
        About
      </Heading>
      <Stack
        p="1rem"
        h="4rem"
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
        <Box>{version}</Box>
      </Stack>
      <Stack
        p="1rem"
        h="4rem"
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
              🐞
            </span>
            Report a bug
          </Text>
        </Box>
        <Button>Report</Button>
      </Stack>
    </Stack>
  );
};

export default AboutView;
