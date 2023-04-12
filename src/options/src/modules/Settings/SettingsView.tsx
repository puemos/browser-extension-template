import { Button } from "@extension/design-system";
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
    <div className="max-w-md flex flex-col space-y-3 p-1 mt-4">
      <div className="p-3 h-16 flex shrink-0 items-center justify-between rounded-md border">
        <div>
          <p className="text-sm font-semibold">Option</p>
        </div>
        <div className="">
          <div className="h-4 p-1 rounded-lg flex flex-row justify-between items-center space-x-2">
            <Button
              className="w-6 h-6"
              size="sm"
              variant={"subtle"}
              aria-label="increase option"
              onClick={onOptionIncrease}
            >
              +
            </Button>
            <div className="flex flex-row w-4 h-2 px-4 justify-center items-center rounded-lg">
              <div className="text-sm border px-3 h-6 flex justify-center items-center rounded-lg">
                {option}
              </div>
            </div>
            <Button
              className="w-6 h-6"
              size="sm"
              variant={"subtle"}
              aria-label="decrease option"
              onClick={onOptionDecrease}
            >
              -
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsView;
