import { createAsyncThunk } from "@reduxjs/toolkit"
import { SPACE_TRADERS_ACCEPT_CONTRACT_URL, SPACTRADERS_MY_CONTRACTS_URL } from "Helpers/URLHelper"
import { RootState } from "Store"
import { AccpetContractResponse } from "Types/AcceptContractResponse"

const acceptContract = createAsyncThunk<
  AccpetContractResponse | null,
  { contractId: string },
  {
    state: RootState
  }
>("main/acceptContract", async ({ contractId }, thunkAPI) => {
  try {
    const state = thunkAPI.getState()

    if (!state.main.token) throw new Error("No token found.")

    const resp = await fetch(`${SPACTRADERS_MY_CONTRACTS_URL}${contractId}${SPACE_TRADERS_ACCEPT_CONTRACT_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${state.main.token}`,
      },
    })

    const json = (await resp.json()) as AccpetContractResponse

    return json
  } catch (exception) {
    alert(exception)
  }

  return null
})

export default acceptContract
