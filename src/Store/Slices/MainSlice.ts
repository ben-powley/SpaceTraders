import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type MainState = {
  apiKey: string
}

const initialState: MainState = {
  apiKey: "",
}

export const MainSlice = createSlice({
  name: "Main",
  initialState,
  reducers: {
    setAPIKey: (state, action: PayloadAction<string>) => {
      state.apiKey = action.payload
    },
  },
})

export const { setAPIKey } = MainSlice.actions
export default MainSlice.reducer
