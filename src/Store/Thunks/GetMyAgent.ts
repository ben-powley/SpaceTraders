import { createAsyncThunk } from "@reduxjs/toolkit"
import { SPACETRADERS_MY_AGENT_URL } from "Helpers/URLHelper"
import { RootState } from "Store"
import { MyAgentResponse } from "Types/MyAgentResponse"

const fetchMyAgent = createAsyncThunk<
  MyAgentResponse | null,
  void,
  {
    state: RootState
  }
>("main/fetchMyAgent", async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState()

    if (!state.main.token) throw new Error("No token found.")

    const resp = await fetch(SPACETRADERS_MY_AGENT_URL, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${state.main.token}`,
      },
    })

    const json = (await resp.json()) as MyAgentResponse

    return json
  } catch (exception) {
    alert(exception)
  }

  return null
})

export default fetchMyAgent
