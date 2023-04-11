import { RootState } from "@extension/core/lib/store";
import { configSlice } from "@extension/core/lib/store/slices";
import { useDispatch, useSelector } from "react-redux";

interface ReturnType {
  option: number;
  onOptionIncrease: () => void;
  onOptionDecrease: () => void;
}

const useSettingsController = (): ReturnType => {
  const dispatch = useDispatch();
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
  return {
    option,
    onOptionIncrease,
    onOptionDecrease,
  };
};

export default useSettingsController;
