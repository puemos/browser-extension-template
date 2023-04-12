import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import HomeView from "./HomeView";

const meta: Meta<typeof HomeView> = {
  title: "HomeView",
  component: HomeView,
};

export default meta;
type Story = StoryObj<typeof HomeView>;

export const Primary: Story = {
  render: () => <HomeView />,
};
