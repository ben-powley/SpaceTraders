import NewGame from "Components/NewGame"
import { useAppSelector } from "Store/Hooks"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const App = () => {
  const navigate = useNavigate()
  const apiKey = useAppSelector((state) => state.main.token)

  useEffect(() => {
    if (apiKey) {
      navigate("/game")
    }
  }, [apiKey, navigate])

  return (
    <>
      <div className="w-2/3 pt-12 mx-auto text-center">
        <h2 className="text-6xl">Welcome to SpaceTraders</h2>
      </div>

      <NewGame />
    </>
  )
}

export default App
