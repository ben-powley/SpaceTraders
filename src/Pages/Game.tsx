import Agent from "Components/Agent"
import Contracts from "Components/Contracts"
import ShipInfo from "Components/ShipInfo"
import { useAppSelector } from "Store/Hooks"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Game = () => {
  const spaceTraderDetails = useAppSelector((state) => state.main.spaceTraderDetails)
  const navigate = useNavigate()

  useEffect(() => {
    if (!spaceTraderDetails) {
      navigate("/")
    }
  }, [navigate, spaceTraderDetails])

  return (
    <div className="flex">
      <div className="flex flex-col items-center w-1/3 gap-3">
        <Agent />
        <ShipInfo />
      </div>

      <div className="flex flex-col items-center w-2/3 gap-3">
        <Contracts />
      </div>
    </div>
  )
}

export default Game
