import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { SPACETRADERS_BASE_URL, SPACETRADERS_REGISTER_ENDPOINT } from "Helpers/URLHelper"
import { RegisterNewGameRequest, RegisterNewGameResponse } from "Types/RegisterNewGame"

export const SpaceTradersAPI = createApi({
  reducerPath: "SpaceTradersAPI",
  baseQuery: fetchBaseQuery({ baseUrl: SPACETRADERS_BASE_URL }),
  endpoints: (builder) => ({
    registerNewGame: builder.mutation<RegisterNewGameResponse, RegisterNewGameRequest>({
      query: (body) => ({
        url: SPACETRADERS_REGISTER_ENDPOINT,
        method: "POST",
        body,
      }),
    }),
  }),
})

export const { useRegisterNewGameMutation } = SpaceTradersAPI
