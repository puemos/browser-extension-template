import { RootState } from "@extension/core/lib/store";
import { configSlice } from "@extension/core/lib/store/slices/config-slice";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const SettingsView = () => {
  const dispatch = useDispatch();
  debugger;
  const option = useSelector<RootState, number>((state) => state.config.option);

  function onOptionIncrease() {
    dispatch(
      configSlice.actions.setOption({
        option: option + 1,
      })
    );
  }
  function onOptionDecrease() {
    dispatch(
      configSlice.actions.setOption({
        option: Math.max(1, option - 1),
      })
    );
  }

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
