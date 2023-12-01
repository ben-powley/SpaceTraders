import { createAsyncThunk } from "@reduxjs/toolkit"
import { SPACETRADERS_REGISTER_URL } from "Helpers/URLHelper"
import { RegisterNewGameResponse } from "Types/RegisterNewGameResponse"

type RegisterThunkProps = {
  symbol: string
  faction: string
}

const registerNewGame = createAsyncThunk("main/registerNewGame", async ({ symbol, faction }: RegisterThunkProps) => {
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
})

export default registerNewGame
