interface ContractTerms {
  deadline: string
  payment: {
    onAccepted: number
    onFulfilled: number
  }
  deliver: {
    tradeSymbol: string
    destinationSymbol: string
    unitsRequired: number
    unitsFulfilled: number
  }[]
}

export interface Contract {
  id: string
  factionSymbol: string
  type: string
  terms: ContractTerms
  accepted: boolean
  fulfilled: boolean
  expiration: string
  deadlineToAccept: string
}

interface FactionTrait {
  symbol: string
  name: string
  description: string
}

interface Faction {
  symbol: string
  name: string
  description: string
  headquarters: string
  traits: FactionTrait[]
  isRecruiting: boolean
}

interface NavRoutePoint {
  symbol: string
  type: string
  systemSymbol: string
  x: number
  y: number
}

interface NavRoute {
  departure: NavRoutePoint
  origin: NavRoutePoint
  destination: NavRoutePoint
  arrival: string
  departureTime: string
}

interface NavStatus {
  systemSymbol: string
  waypointSymbol: string
  route: NavRoute
  status: string
  flightMode: string
}

interface CrewDetails {
  current: number
  capacity: number
  required: number
  rotation: string
  morale: number
  wages: number
}

interface FuelConsumed {
  amount: number
  timestamp: string
}

interface FuelDetails {
  current: number
  capacity: number
  consumed: FuelConsumed
}

interface CooldownDetails {
  shipSymbol: string
  totalSeconds: number
  remainingSeconds: number
}

interface ShipFrame {
  symbol: string
  name: string
  description: string
  moduleSlots: number
  mountingPoints: number
  fuelCapacity: number
  condition: number
  requirements: {
    power: number
    crew: number
  }
}

interface ShipReactor {
  symbol: string
  name: string
  description: string
  condition: number
  powerOutput: number
  requirements: {
    crew: number
  }
}

interface ShipEngine {
  symbol: string
  name: string
  description: string
  condition: number
  speed: number
  requirements: {
    power: number
    crew: number
  }
}

interface ShipModule {
  symbol: string
  name: string
  description: string
  capacity?: number
  requirements: {
    crew: number
    power: number
    slots: number
  }
}

interface ShipMount {
  symbol: string
  name: string
  description: string
  strength: number
  deposits?: string[]
  requirements: {
    crew: number
    power: number
  }
}

interface ShipRegistration {
  name: string
  factionSymbol: string
  role: string
}

interface ShipCargo {
  capacity: number
  units: number
  inventory: []
}

interface ShipDetails {
  symbol: string
  nav: NavStatus
  crew: CrewDetails
  fuel: FuelDetails
  cooldown: CooldownDetails
  frame: ShipFrame
  reactor: ShipReactor
  engine: ShipEngine
  modules: ShipModule[]
  mounts: ShipMount[]
  registration: ShipRegistration
  cargo: ShipCargo
}

export interface Agent {
  accountId: string
  symbol: string
  headquarters: string
  credits: number
  startingFaction: string
  shipCount: number
}

interface Orbital {
  symbol: string
}

export interface Waypoint {
  symbol: string
  type: string
  x: number
  y: number
  orbitals: Orbital[]
}

export interface System {
  symbol: string
  sectorSymbol: string
  type: string
  x: number
  y: number
  waypoints: Waypoint[]
}

export interface ResponseMeta {
  total: number
  page: number
  limit: number
}

export interface RegisterResponse {
  token?: string
  agent?: Agent
  contract?: Contract
  faction?: Faction
  ship?: ShipDetails
}
