import { Agent, Contract } from "./SpaceTraderTypes"

export interface AccpetContractResponse {
  data: {
    agent: Agent
    contract: Contract
  }
}
