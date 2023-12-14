import { RegisterResponse } from "./SpaceTraderTypes"

export interface RegisterNewGameResponse {
  data: RegisterResponse
}

export interface RegisterNewGameRequest {
  faction: string
  symbol: string
}
