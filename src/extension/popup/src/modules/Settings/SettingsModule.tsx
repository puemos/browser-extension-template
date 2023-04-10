import React from "react";
import SettingsView from "./SettingsView";
import useSettingsController from "./SettingsController";

const SettingsModule = () => {
  const { onOptionDecrease, onOptionIncrease, option } =
    useSettingsController();

  return (
    <SettingsView
      onOptionDecrease={onOptionDecrease}
      onOptionIncrease={onOptionIncrease}
      option={option}
    ></SettingsView>
  );
};

export default SettingsModule;
