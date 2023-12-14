import { createAsyncThunk } from "@reduxjs/toolkit"
import { SPACETRADERS_REGISTER_URL } from "Helpers/URLHelper"
import { RootState } from "Store"
import { RegisterNewGameResponse } from "Types/RegisterNewGame"

const registerNewGame = createAsyncThunk<
  RegisterNewGameResponse | null,
  { symbol: string; faction: string },
  {
    state: RootState
  }
>("main/registerNewGame", async ({ symbol, faction }) => {
  try {
    const resp = await fetch(SPACETRADERS_REGISTER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        symbol: symbol,
        faction: faction,
      }),
    })

    const json = (await resp.json()) as RegisterNewGameResponse

    return json
  } catch (exception) {
    alert(exception)
  }

  return null
})

export default registerNewGame
