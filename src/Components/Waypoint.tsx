import { Waypoint } from "Types/SpaceTraderTypes"
import { useEffect, useState } from "react"

type Props = {
  waypoint: Waypoint
}

const Waypoint = ({ waypoint }: Props) => {
  const planetTypes = ["dry-0", "continental-0", "lava-0"]
  const [image, setImage] = useState("planets/barren-0")

  useEffect(() => {
    if (waypoint) {
      switch (waypoint.type) {
        case "PLANET":
          setImage(`planets/${planetTypes[Math.floor(Math.random() * planetTypes.length)]}`)
          break
        case "GAS_GIANT":
          setImage("planets/gas-giant-0")
          break

        case "ASTEROID":
          setImage(`asteroids/asteroid-${Math.floor(Math.random() * 6)}`)
          break
        case "NEBULA":
          setImage(`nebulae/nebula-${Math.floor(Math.random() * 1)}`)
          break
      }
    }
  }, [waypoint])

  return (
    <div className="bg-zinc-700 rounded-md text-emerald-500 p-2">
      <div>{waypoint.symbol}</div>
      <div className="planet mx-auto mt-2" style={{ backgroundImage: `url('/assets/${image}.png')` }}></div>
    </div>
  )
}

export default Waypoint
