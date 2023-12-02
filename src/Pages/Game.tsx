import Agent from "Components/Agent"
import Contracts from "Components/Contracts"
import ShipInfo from "Components/ShipInfo"
import Systems from "Components/Systems"
import { useAppDispatch, useAppSelector } from "Store/Hooks"
import fetchSystems from "Store/Thunks/GetSystems"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Game = () => {
  const dispatch = useAppDispatch()
  const spaceTraderDetails = useAppSelector((state) => state.main.spaceTraderDetails)
  const navigate = useNavigate()

  useEffect(() => {
    if (!spaceTraderDetails) {
      navigate("/")
      return
    }

    dispatch(fetchSystems(spaceTraderDetails.data.token))
  }, [navigate, spaceTraderDetails])

  return (
    <div className="flex">
      <div className="flex flex-col items-center w-1/3 gap-3">
        <Agent />
        <ShipInfo />
      </div>

      <div className="flex flex-col items-center w-2/3 gap-3">
        <Contracts />
        <Systems />
      </div>
    </div>
  )
}

export default Game
