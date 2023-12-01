import { createSlice } from "@reduxjs/toolkit"
import acceptContract from "Store/Thunks/AcceptContract"
import registerNewGame from "Store/Thunks/RegisterThunk"
import { RegisterNewGameResponse } from "Types/RegisterNewGameResponse"
import { Contract } from "Types/SpaceTraderTypes"

export type MainState = {
  spaceTraderDetails?: RegisterNewGameResponse
  activeContract?: Contract
}

const initialState: MainState = {}

export const MainSlice = createSlice({
  name: "Main",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerNewGame.fulfilled, (state, action) => {
      state.spaceTraderDetails = action.payload

      state.activeContract = action.payload?.data.contract
    }),
      builder.addCase(acceptContract.fulfilled, (state, action) => {
        state.activeContract = action.payload?.data.contract
      })
  },
})

// export const {} = MainSlice.actions
export default MainSlice.reducer
