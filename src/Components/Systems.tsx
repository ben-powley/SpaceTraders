import { useAppSelector } from "Store/Hooks"
import System from "./System"

const Systems = () => {
  const systems = useAppSelector((state) => state.main.systems)

  if (!systems) return <></>

  return (
    <div className="flex flex-col w-full gap-2 p-5 rounded-md bg-zinc-800">
      <div>Systems</div>
      <div className="flex flex-col gap-3 mt-4">
        {systems.map((system) => (
          <System key={`SYSTEM_${system.symbol}`} system={system} />
        ))}
      </div>
    </div>
  )
}

export default Systems
