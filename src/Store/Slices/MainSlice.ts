import { createSlice } from "@reduxjs/toolkit"
import acceptContract from "Store/Thunks/AcceptContract"
import fetchSystems from "Store/Thunks/GetSystems"
import registerNewGame from "Store/Thunks/RegisterThunk"
import { RegisterNewGameResponse } from "Types/RegisterNewGameResponse"
import { Contract, System } from "Types/SpaceTraderTypes"

export type MainState = {
  spaceTraderDetails?: RegisterNewGameResponse
  activeContract?: Contract
  systems?: System[]
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
      }),
      builder.addCase(fetchSystems.fulfilled, (state, action) => {
        state.systems = action.payload?.data
      })
  },
})

// export const {} = MainSlice.actions
export default MainSlice.reducer
