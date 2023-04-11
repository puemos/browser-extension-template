import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Navbar } from "./Navbar";

const meta: Meta<typeof Navbar> = {
  title: "Navbar",
  component: Navbar,
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Primary: Story = {
  render: () => (
    <>
      <Flex direction="column" height={"100%"}>
        <Box className="Main" flex="1"></Box>
        <Navbar />
      </Flex>
    </>
  ),
};
