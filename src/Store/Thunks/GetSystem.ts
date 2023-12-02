import { createAsyncThunk } from "@reduxjs/toolkit"
import { SPACETRADERS_SYSTEMS_URL, SPACETRADERS_WAYPOINTS_URL } from "Helpers/URLHelper"
import { FetchSystemsResponse } from "Types/FetchSystemsResponse"

type FetchSystemsThunkProps = {
  apiKey: string
  systemSymbol: string
}

const fetchSystem = createAsyncThunk("main/fetchSystem", async ({ apiKey, systemSymbol }: FetchSystemsThunkProps) => {
  try {
    const resp = await fetch(`${SPACETRADERS_SYSTEMS_URL}/${systemSymbol}${SPACETRADERS_WAYPOINTS_URL}`, {
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

export default fetchSystem
