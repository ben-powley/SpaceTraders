import { createAsyncThunk } from "@reduxjs/toolkit"
import { SPACETRADERS_MY_AGENT_URL } from "Helpers/URLHelper"
import { MyAgentResponse } from "Types/MyAgentResponse"

const fetchMyAgent = createAsyncThunk("main/fetchMyAgent", async (apiKey: string, thunkApi) => {
  try {
    const resp = await fetch(SPACETRADERS_MY_AGENT_URL, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    })

    const json = (await resp.json()) as MyAgentResponse

    // thunkApi.dispatch()

    return json
  } catch (exception) {
    alert(exception)
  }
})

export default fetchMyAgent
