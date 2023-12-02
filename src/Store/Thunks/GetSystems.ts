import { createAsyncThunk } from "@reduxjs/toolkit"
import { SPACETRADERS_SYSTEMS_URL } from "Helpers/URLHelper"
import { FetchSystemsResponse } from "Types/FetchSystemsResponse"

const fetchSystems = createAsyncThunk("main/fetchSystems", async (apiKey: string) => {
  try {
    const resp = await fetch(SPACETRADERS_SYSTEMS_URL, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    })

    const json = (await resp.json()) as FetchSystemsResponse

    return json
  } catch (exception) {
    alert(exception)
  }
})

export default fetchSystems
