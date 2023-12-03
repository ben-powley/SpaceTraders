import { createAsyncThunk } from "@reduxjs/toolkit"
import { SPACETRADERS_SYSTEMS_URL } from "Helpers/URLHelper"
import { RootState } from "Store"
import { FetchSystemsResponse } from "Types/FetchSystemsResponse"

const fetchSystems = createAsyncThunk<
  FetchSystemsResponse | null,
  void,
  {
    state: RootState
  }
>("main/fetchSystems", async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState()

    if (!state.main.token) throw new Error("No token found.")

    const resp = await fetch(SPACETRADERS_SYSTEMS_URL, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${state.main.token}`,
      },
    })

    const json = (await resp.json()) as FetchSystemsResponse

    return json
  } catch (exception) {
    alert(exception)
  }

  return null
})

export default fetchSystems
