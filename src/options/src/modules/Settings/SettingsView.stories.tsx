import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import SettingsView from "./SettingsView";

const meta: Meta<typeof SettingsView> = {
  title: "SettingsView",
  component: SettingsView,
};

export default meta;
type Story = StoryObj<typeof SettingsView>;

export const Primary: Story = {
  render: () => (
    <SettingsView
      onOptionDecrease={() => {}}
      onOptionIncrease={() => {}}
      option={4}
    />
  ),
};
