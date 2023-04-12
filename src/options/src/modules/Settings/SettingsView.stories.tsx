import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import SettingsView from "./SettingsView";

import { ViewWrapper } from "../../../.storybook/ViewWrapper";

const meta: Meta<typeof SettingsView> = {
  title: "SettingsView",
  component: SettingsView,
};

export default meta;
type Story = StoryObj<typeof SettingsView>;

export const Primary: Story = {
  render: () => (
    <ViewWrapper>
      <SettingsView
        onOptionDecrease={() => {}}
        onOptionIncrease={() => {}}
        option={4}
      />
    </ViewWrapper>
  ),
};
