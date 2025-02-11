import { Station } from "../generated/schema";
import { UpdateMinMaxDeposit as UpdateMinMaxDepositEvent } from "../generated/StnxEmitter/StnxEmitter";

export function updateMinMax(event: UpdateMinMaxDepositEvent): void {
  let daoAddress = event.params._proxy.toHex();
  let station = Station.load(daoAddress);
  if (!station) return;

  station.minDepositAmount = event.params._minDeposit.toString();
  station.maxDepositAmount = event.params._maxDeposit.toString();
  station.transactionHash = event.transaction.hash.toHex();
  station.blockNumber = event.block.number;
  station.save();
}
