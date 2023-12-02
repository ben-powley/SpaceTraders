import { System } from "Types/SpaceTraderTypes"
import Waypoint from "./Waypoint"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "Store/Hooks"
import fetchSystem from "Store/Thunks/GetSystem"

type Props = {
  system: System
}

const System = ({ system }: Props) => {
  const dispatch = useAppDispatch()
  const apiKey = useAppSelector((state) => state.main.spaceTraderDetails?.data.token)

  useEffect(() => {
    if (apiKey) {
      dispatch(fetchSystem({ apiKey: apiKey, systemSymbol: system.symbol }))
    }
  }, [apiKey])

  return (
    <div className="flex gap-3 border-b-2 pb-4 border-opacity-10 border-white">
      <div className="flex flex-col items-center justify-center text-center gap-2">
        <div className="text-emerald-500">{system.symbol}</div>
        <div className="sun"></div>
      </div>

      {system.waypoints.length > 0 ? (
        <div className="flex flex-col justify-center">
          <div>Waypoints</div>
          <div className="grid grid-cols-7 gap-1 mt-2">
            {system.waypoints.map((waypoint) => (
              <Waypoint key={`WAYPOINT_${waypoint.symbol}`} waypoint={waypoint} />
            ))}
          </div>
        </div>
      ) : (
        <div>No Waypoints</div>
      )}
    </div>
  )
}

export default System
