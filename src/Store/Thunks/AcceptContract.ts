import { createAsyncThunk } from "@reduxjs/toolkit"
import { SPACE_TRADERS_ACCEPT_CONTRACT_URL, SPACTRADERS_MY_CONTRACTS_URL } from "Helpers/URLHelper"
import { AccpetContractResponse } from "Types/AcceptContractResponse"

type AcceptContractThunkProps = {
  apiKey: string
  contractId: string
}

const acceptContract = createAsyncThunk("main/acceptContract", async ({ apiKey, contractId }: AcceptContractThunkProps) => {
  try {
    const resp = await fetch(`${SPACTRADERS_MY_CONTRACTS_URL}${contractId}${SPACE_TRADERS_ACCEPT_CONTRACT_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    })

    const json = (await resp.json()) as AccpetContractResponse

    return json
  } catch (exception) {
    alert(exception)
  }
})

export default acceptContract
