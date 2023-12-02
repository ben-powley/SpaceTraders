import { ResponseMeta, System } from "./SpaceTraderTypes"

export interface FetchSystemsResponse {
  data: System[]
  meta: ResponseMeta
}
