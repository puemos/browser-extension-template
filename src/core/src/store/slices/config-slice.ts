import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ISetOptionPayload {
  option: number;
}

export interface IConfigState {
  option: number;
}

const initialConfigState: IConfigState = {
  option: 0,
};

export const configSlice = createSlice({
  name: "config",
  initialState: initialConfigState,
  reducers: {
    setOption(state, action: PayloadAction<ISetOptionPayload>) {
      state.option = action.payload.option;
    },
  },
});
