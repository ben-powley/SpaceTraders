import { useAppDispatch } from "Store/Hooks"
import { setAPIKey } from "Store/Slices/MainSlice"
import { useState } from "react"

function NewGame() {
  const [resp, setResp] = useState("")
  const [form, setForm] = useState({ symbol: "", faction: "COSMIC" })

  const dispatch = useAppDispatch()

  const onFormSubmit = async () => {
    const resp = await fetch("https://api.spacetraders.io/v2/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        symbol: form.symbol,
        faction: form.faction,
      }),
    })

    const json = await resp.json()

    if (resp.ok) {
      dispatch(setAPIKey(json.data.token))
    }

    setResp(JSON.stringify(json, null, 2))
  }

  return (
    <div className="flex flex-col justify-center gap-3 bg-zinc-900 p-6 w-1/3 mx-auto my-24">
      <h1 className="text-4xl text-white font-bold">New Game</h1>
      <input
        className="py-2 px-2 rounded-md bg-zinc-700 text-zinc-200"
        name="symbol"
        value={form.symbol}
        onChange={(e) => setForm({ ...form, symbol: e.currentTarget.value })}
        placeholder="Symbol"
      />
      <input
        className="py-2 px-2 rounded-md bg-zinc-700 text-zinc-200"
        name="faction"
        value={form.faction}
        onChange={(e) => setForm({ ...form, faction: e.currentTarget.value })}
        placeholder="Faction"
      />
      <input className="bg-emerald-500 py-2 rounded-md hover:bg-emerald-600 cursor-pointer" type="submit" onClick={() => onFormSubmit()} />
      <pre>Response: {resp}</pre>
    </div>
  )
}

export default NewGame
