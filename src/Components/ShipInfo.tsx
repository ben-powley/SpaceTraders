import { useAppSelector } from "Store/Hooks"

const ShipInfo = () => {
  const ship = useAppSelector((state) => state.main.spaceTraderDetails?.data.ship)

  if (!ship) return <></>

  return (
    <div className="flex flex-col gap-2 bg-zinc-800 p-5 rounded-md w-[400px]">
      <div>Ship Info</div>

      <div className="flex items-center gap-3">
        Symbol: <span className="text-emerald-500">{ship.symbol}</span>
      </div>

      <div className="flex items-center gap-3">
        Fuel:
        <span className="text-emerald-500">
          {ship.fuel.current} / {ship.fuel.capacity}
        </span>
      </div>

      <div className="flex items-center gap-3">
        Crew:
        <span className="text-emerald-500">
          {ship.crew.current} / {ship.crew.capacity}
        </span>
      </div>

      <div className="flex items-center gap-3">
        Cargo:
        <span className="text-emerald-500">
          {ship.cargo.inventory.length} / {ship.cargo.capacity}
        </span>
      </div>
    </div>
  )
}

export default ShipInfo
