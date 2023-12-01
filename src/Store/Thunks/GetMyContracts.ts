import { createAsyncThunk } from "@reduxjs/toolkit"
import { SPACTRADERS_MY_CONTRACTS_URL } from "Helpers/URLHelper"

const fetchMyContracts = createAsyncThunk("main/fetchMyContracts", async (apiKey: string) => {
  try {
    const resp = await fetch(SPACTRADERS_MY_CONTRACTS_URL, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    })

    const json = await resp.json()

    return json
  } catch (exception) {
    alert(exception)
  }
})

export default fetchMyContracts
