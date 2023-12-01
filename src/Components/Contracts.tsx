import { useAppDispatch, useAppSelector } from "Store/Hooks"
import acceptContract from "Store/Thunks/AcceptContract"

const Contracts = () => {
  const dispatch = useAppDispatch()
  const apiKey = useAppSelector((state) => state.main.spaceTraderDetails?.data.token)
  const activeContract = useAppSelector((state) => state.main.activeContract)

  const onAcceptContract = () => {
    const contractId = activeContract?.id

    if (contractId && apiKey) {
      dispatch(acceptContract({ apiKey, contractId }))
    }
  }

  return (
    <div className="flex flex-col w-full gap-2 p-5 rounded-md bg-zinc-800">
      <div>Contracts</div>
      <div className="flex items-center gap-3">
        ID: <span className="text-emerald-500">{activeContract?.id}</span>
      </div>
      <div className="flex items-center gap-3">
        Deadline: <span className="text-emerald-500">{activeContract?.terms?.deadline}</span>
      </div>
      <div className="flex items-center gap-3">
        Accepted: <span className="text-emerald-500">{activeContract?.accepted ? "YES" : "NO"}</span>
      </div>

      <div className="flex gap-3">
        Items to Deliver:
        {activeContract?.terms.deliver.map((deliver, index) => (
          <div key={`${deliver.destinationSymbol}_${index}`}>
            <div className="flex items-center gap-3">
              Item: <span className="text-emerald-500">{deliver.tradeSymbol}</span>
            </div>
            <div className="flex items-center gap-3">
              Destination: <span className="text-emerald-500">{deliver.destinationSymbol}</span>
            </div>
            <div className="flex items-center gap-3">
              Amount:{" "}
              <span className="text-emerald-500">
                {deliver.unitsFulfilled} / {deliver.unitsRequired}
              </span>
            </div>
          </div>
        ))}
      </div>

      {!activeContract?.accepted && (
        <div>
          <button onClick={() => onAcceptContract()}>Accept Contract</button>
        </div>
      )}
    </div>
  )
}

export default Contracts
