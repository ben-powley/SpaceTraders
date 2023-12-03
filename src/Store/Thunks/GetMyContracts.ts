import { createAsyncThunk } from "@reduxjs/toolkit"
import { SPACTRADERS_MY_CONTRACTS_URL } from "Helpers/URLHelper"
import { RootState } from "Store"
import { Contract } from "Types/SpaceTraderTypes"

const fetchMyContracts = createAsyncThunk<
  Contract | null,
  void,
  {
    state: RootState
  }
>("main/fetchMyContracts", async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState()

    if (!state.main.token) throw new Error("No token found.")

    const resp = await fetch(SPACTRADERS_MY_CONTRACTS_URL, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${state.main.token}`,
      },
    })

    const json = (await resp.json()) as Contract

    return json
  } catch (exception) {
    alert(exception)
  }

  return null
})

export default fetchMyContracts
