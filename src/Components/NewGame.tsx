import { useAppDispatch, useAppSelector } from "Store/Hooks"
import registerNewGame from "Store/Thunks/RegisterThunk"
import { useEffect, useState } from "react"
import { HiExclamationCircle } from "react-icons/hi2"
import { useNavigate } from "react-router-dom"

function NewGame() {
  const [form, setForm] = useState({ symbol: "", faction: "COSMIC" })
  const [formError, setFormError] = useState("")
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { spaceTraderDetails } = useAppSelector((state) => state.main)

  const onFormSubmit = async () => {
    if (form.symbol.length === 0 || form.faction.length === 0) {
      setFormError("You must fill out the Symbol and Faction inputs to continue")
    }

    dispatch(registerNewGame({ symbol: form.symbol, faction: form.faction }))
  }

  useEffect(() => {
    if (spaceTraderDetails) {
      navigate("/game")
    }
  }, [spaceTraderDetails, navigate])

  return (
    <div className="flex flex-col justify-center w-1/3 gap-3 p-6 mx-auto my-24 rounded-md bg-zinc-900">
      <h1 className="mb-1 text-3xl font-bold text-white">New Game</h1>

      {formError.length > 0 && (
        <div className="flex items-center gap-3 p-3 text-red-100 bg-red-700 rounded-md">
          <HiExclamationCircle size={26} />
          {formError}
        </div>
      )}

      <input
        name="symbol"
        value={form.symbol}
        onChange={(e) => setForm({ ...form, symbol: e.currentTarget.value })}
        placeholder="Symbol"
        type="text"
      />
      <input
        name="faction"
        value={form.faction}
        onChange={(e) => setForm({ ...form, faction: e.currentTarget.value })}
        placeholder="Faction"
        type="text"
      />
      <input
        type="submit"
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()

          onFormSubmit()
        }}
      />
    </div>
  )
}

export default NewGame
