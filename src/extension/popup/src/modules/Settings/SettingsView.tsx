import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton, Stack, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  option: number;
  onOptionIncrease: () => void;
  onOptionDecrease: () => void;
}

const SettingsView = ({
  option,
  onOptionIncrease,
  onOptionDecrease,
}: Props) => {
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
            Option
          </Text>
        </Box>
        <Stack isInline>
          <IconButton
            icon={<AddIcon />}
            size="sm"
            aria-label="increase option"
            onClick={onOptionIncrease}
            bg="#5666f3"
          ></IconButton>
          <Flex
            width="4rem"
            height="2rem"
            pl="16px"
            pr="16px"
            justifyContent="center"
            alignItems="center"
            borderRadius="0.25rem"
            bg="gray.600"
          >
            <Text fontSize="md" fontWeight="semibold">
              {option}
            </Text>
          </Flex>
          <IconButton
            size="sm"
            icon={<MinusIcon />}
            aria-label="decrease option"
            bg="#5666f3"
            onClick={onOptionDecrease}
          ></IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SettingsView;
