import { useAppSelector } from "Store/Hooks"

const Agent = () => {
  const agent = useAppSelector((state) => state.main.spaceTraderDetails?.data.agent)

  if (!agent) return <></>

  return (
    <div className="flex flex-col gap-2 bg-zinc-800 p-5 rounded-md w-[400px]">
      <div role="heading">Agent Info</div>
      <div className="flex items-center gap-3">
        Symbol: <span className="text-emerald-500">{agent.symbol}</span>
      </div>

      <div className="flex items-center gap-3">
        Faction: <span className="text-emerald-500">{agent.startingFaction}</span>
      </div>

      <div className="flex items-center gap-3">
        Credits: <span className="text-emerald-500">{agent.credits}</span>
      </div>

      <div className="flex items-center gap-3">
        HQ: <span className="text-emerald-500">{agent.headquarters}</span>
      </div>
    </div>
  )
}

export default Agent
